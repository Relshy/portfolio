"""
Builds the portfolio site from build/config.py.

Run from the portfolio root:
    python build/build.py

What it does:
  1. Patches GENIUSV2_files/index-554bf36b888722f7.js — replaces the
     bubble array embedded in that bundle with the data in config.BUBBLES.
     This is what actually controls the live page content.
  2. Regenerates GENIUSV2.html and contact.html. The static <main> is
     left empty because Next.js fully replaces it on hydration, so any
     SSR'd bubbles would either be invisible or briefly mis-positioned.

Edit config.py, never the generated HTML or the JS bundle directly.
"""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import config as cfg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# ---------------------------------------------------------------------------
# 1. JS bundle patcher
# ---------------------------------------------------------------------------

# The JS bundle has a call like:
#   (0,o.PadBubblePositions)("index",[ {...}, {...}, ... ])
# We find that call and replace the array with our serialized BUBBLES.

_PATCH_MARKER = '(0,o.PadBubblePositions)("index",'


def _find_array_bounds(text: str, marker_end: int) -> tuple[int, int]:
    """Given the index just past the marker (pointing at '['), return
    (start, end) of the array including its outer brackets."""
    if text[marker_end] != "[":
        raise ValueError(f"expected '[' at offset {marker_end}, got {text[marker_end]!r}")
    depth = 0
    for i in range(marker_end, len(text)):
        ch = text[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return marker_end, i + 1
    raise ValueError("unbalanced brackets in JS bundle")


def patch_index_bundle() -> str:
    path = os.path.join(ROOT, cfg.INDEX_BUNDLE)
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    marker_at = text.find(_PATCH_MARKER)
    if marker_at == -1:
        raise SystemExit(
            f"Could not find PadBubblePositions call in {cfg.INDEX_BUNDLE}. "
            "The bundle format may have changed."
        )

    array_start, array_end = _find_array_bounds(text, marker_at + len(_PATCH_MARKER))
    new_array = json.dumps(cfg.BUBBLES, separators=(",", ":"), ensure_ascii=False)
    new_text = text[:array_start] + new_array + text[array_end:]

    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(new_text)
    return path


def _replace_js_property_array(text: str, key: str, array_data: list[dict]) -> str:
    marker = f'"{key}":'
    marker_at = text.find(marker)
    if marker_at == -1:
        return text

    array_start, array_end = _find_array_bounds(text, marker_at + len(marker))
    new_array = json.dumps(array_data, separators=(",", ":"), ensure_ascii=False)
    return text[:array_start] + new_array + text[array_end:]


def patch_accessibility_ui() -> list[str]:
    """Force the site into accessibility mode and update the settings label
    so the visual/accessible chooser no longer appears."""
    assets_dir = Path(ROOT) / cfg.ASSETS_DIR
    replacements = [
        ('children:"Accessibility: Visuals"', 'children:"Accessibility: Accessibility"'),
        (':"Undetermined";var e', ':"Accessibility";var e'),
        (
            'className:"Undetermined"===b?"alertContainer":"alertContainer Hidden"',
            'className:"alertContainer Hidden"',
        ),
    ]

    patched: list[str] = []
    for path in assets_dir.glob("*.js"):
        text = path.read_text(encoding="utf-8")
        new_text = text
        for old, new in replacements:
            new_text = new_text.replace(old, new)
        new_text = _replace_js_property_array(new_text, "./contact", cfg.CONTACT_BUBBLES)
        new_text = _replace_js_property_array(new_text, "./contact.ts", cfg.CONTACT_BUBBLES)
        new_text = re.sub(
            r'location\.pathname\.substring\(1\)(?:\.replace\(/\\\.html\$/,""\))*',
            lambda _: r'location.pathname.substring(1).replace(/\.html$/,"")',
            new_text,
        )
        if new_text != text:
            path.write_text(new_text, encoding="utf-8", newline="")
            patched.append(str(path))
    return patched


# ---------------------------------------------------------------------------
# 2. HTML generation
# ---------------------------------------------------------------------------

def _html_root_attrs() -> str:
    """Top-level <html> attributes. With ALLOW_TEXT_SELECTION on, drop the
    prevent-drag class and the user-select / cursor styles."""
    if cfg.ALLOW_TEXT_SELECTION:
        return 'lang="en-US"'
    return (
        'lang="en-US" class="prevent-drag"'
        ' style="cursor: grab; user-select: none; overflow: hidden;"'
    )


PAGE_TEMPLATE = """<!DOCTYPE html>
<!-- saved from url=(0019)https://relshy.nl/ -->
<html {html_attrs}>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Relshy is a Roblox developer portfolio focused on modeling, animation, and scripting.">
<meta name="keywords" content="portfolio, roblox, scripting, modeling, animation, freelance developer">
<meta name="viewport" content="initial-scale=1, maximum-scale=2.5, minimum-scale=0.5, width=device-width, height=device-height">
<link rel="icon" type="image/png" href="./avatar.png">
<link rel="apple-touch-icon" href="./avatar.png">
<link rel="manifest" href="./manifest.json">
<meta name="HandheldFriendly" content="True">
<meta property="og:site_name" content="Relshy">
<meta property="og:url" content="https://relshy.nl">
<meta property="og:keywords" content="portfolio, roblox, scripting, modeling, animation, freelance developer">
<meta property="og:locale" content="en-US">
<meta property="og:type" content="website">
<meta property="og:image:url" content="./avatar.png">
<meta property="og:image:alt" content="Relshy profile image">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="512">
<meta property="og:image:height" content="512">
<meta property="og:title" content="Relshy - Roblox Developer Portfolio">
<meta property="og:description" content="Relshy builds Roblox experiences with modeling, animation, and scripting.">
<meta name="twitter:card" content="summary">
<meta name="twitter:image" content="./avatar.png">
<meta name="twitter:image:alt" content="Relshy profile image">
<meta name="twitter:description" content="Relshy builds Roblox experiences with modeling, animation, and scripting.">
<title>{title}</title>
<meta property="og:title" content="{title}">
<meta name="twitter:title" content="{title}">
<meta name="theme-color" content="hsl(0, 0%, 100%)">
<meta name="next-head-count" content="28">
<link rel="preload" href="{assets}/8abd9fd5810fb934.css" as="style">
<link rel="stylesheet" href="{assets}/8abd9fd5810fb934.css" data-n-g="">
<style>
.alertContainer {{ display: none !important; }}
#StaticBackButton {{
position: fixed;
right: .9em;
top: .9em;
z-index: 1001;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
padding: .8rem;
border: none;
aspect-ratio: 1;
cursor: pointer;
}}
</style>
<noscript data-n-css="">
</noscript>
<script defer="" nomodule="" src="{assets}/polyfills-c67a75d1b6f99dc8.js" type="text/javascript">
</script>
<script src="{assets}/webpack-dfb62d9bd519fcb1.js" defer="" type="text/javascript">
</script>
<script src="{assets}/framework-b3ca2e9a9574e304.js" defer="" type="text/javascript">
</script>
<script src="{assets}/main-195cf583c96163fb.js" defer="" type="text/javascript">
</script>
<script src="{assets}/_app-3a68e7aad61d745e.js" defer="" type="text/javascript">
</script>
<script src="{assets}/48251288-2e714b0853715c7f.js" defer="" type="text/javascript">
</script>
<script src="{assets}/328-58fd30a6eb78ef04.js" defer="" type="text/javascript">
</script>
<script src="{assets}/437-896788d80a7f392c.js" defer="" type="text/javascript">
</script>
<script src="{assets}/{per_page_script}" defer="" type="text/javascript">
</script>
<script src="{assets}/_buildManifest.js" defer="" type="text/javascript">
</script>
<script src="{assets}/_ssgManifest.js" defer="" type="text/javascript">
</script>
{prefetch_link}</head>
<body style="overflow: hidden; width: 100%; height: 100%;">
<div id="__next">
<div id="ColorTheme" class="Light" style="--color-primary:hsl(0, 0%, 100%);--color-secondary:hsl(0, 0%, 95%);--color-text:hsl(0, 0%, 0%)">
<div>
<div id="BackgroundDisplay" style="transform: scale(1) translateX(1px) translateY(-45px);">
<svg width="2000" height="2000" style="position: absolute; transform: translateZ(-1px);">
<defs>
<clippath id="noise-circular-clip">
<circle cx="500" cy="500" r="499.5" fill="url(#pattern-background)">
</circle>
</clippath>
<radialgradient id="gggrain-gradient" r="0.5">
<stop offset="0%" stop-color="var(--color-text)" stop-opacity="0">
</stop>
<stop offset="100%" stop-color="var(--color-text)" stop-opacity="1">
</stop>
</radialgradient>
<filter id="gggrain-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feturbulence type="fractalNoise" baseFrequency="1" numOctaves="2" seed="2" x="0%" y="0%" width="50%" height="50%" result="turbulence">
</feturbulence>
<fecolormatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="colormatrix">
</fecolormatrix>
<fecomponenttransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
<fefuncr type="linear" slope="3">
</fefuncr>
<fefuncg type="linear" slope="3">
</fefuncg>
<fefuncb type="linear" slope="3">
</fefuncb>
</fecomponenttransfer>
<fecolormatrix x="0%" y="0%" width="100%" height="100%" in="componentTransfer" result="colormatrix2" type="matrix" values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -11 ">
</fecolormatrix>
</filter>
<filter id="gggrain-saturate" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<fecolormatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix">
</fecolormatrix>
</filter>
</defs>
<g opacity="0.05">
<circle cx="1000" cy="1000" r="999" fill="url(#gggrain-gradient)">
</circle>
<rect width="100%" height="100%" filter="url(#gggrain-filter)" fill="transparent" clip-path="url(#noise-circular-clip)" style="transform: scale(2);">
</rect>
</g>
</svg>
<div class="FlatBackgroundPattern">
<svg class="pattern" width="125rem" height="125rem">
<defs>
<pattern id="pattern-background" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
<circle cx="16" cy="16" r="1.2" fill="var(--color-text)">
</circle>
</pattern>
</defs>
<circle cx="1000" cy="1000" r="999" fill="url(#pattern-background)">
</circle>
</svg>
</div>
<svg height="125rem" width="125rem" style="position: absolute;">
<path d="M1000,0V2000M0,1000H2000M1000,667a333,333 0 1,0 0, 666a333,333 0 1,0 0, -666M1000,334a666,666 0 1,0 0, 1332a666,666 0 1,0 0, -1332M1000,1a999,999 0 1,0 0, 1998a999,999 0 1,0 0, -1998" stroke="var(--color-text)" opacity="0.15" stroke-width="1" fill="none">
</path>
</svg>
<div id="Underlay">
<svg height="125rem" width="125rem" viewBox="0 0 100 100" style="position: absolute;">
<defs>
</defs>
</svg>
</div>
<main id="MainContent">
</main>
</div>
<div id="OverlayDisplay">
<nav id="HomeButton">
<button aria-label="Home Button" class="dimensionalBox Hidden" data-e2e="home-button">
<svg viewBox="0 0 50 50" width="35" height="35">
<path d="M10,46 L40,46 M10,46 L10,18 M40,46 L40,18 M4,22 L25,4 L46,22" fill="transparent" stroke-linecap="round" stroke-width="7" stroke="var(--color-text)">
</path>
</svg>
</button>
</nav>
<aside id="Settings">
<button class="dimensionalBox" id="DisplaySettings" aria-label="Display Settings" data-e2e="display-settings">
<svg viewBox="0 0 50 50" width="35" height="35">
<path d="M4,4 L46,4 M4,25 L46,25 M4,46 L46,46" fill="transparent" stroke-linecap="round" stroke-width="7" stroke="var(--color-text)">
</path>
</svg>
</button>
<div id="SettingsList" class="dimensionalBox" data-e2e="settings-list">
<button>Accessibility: Accessibility</button>
<button data-e2e="travel-mode">Travel Mode: Prototype</button>
<button>Color Theme: Light</button>
<button>Graphics Level: Auto</button>
</div>
</aside>
</div>
</div>
</div>
</div>
<script id="__NEXT_DATA__" type="application/json">{next_data}</script>
<next-route-announcer>
<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;">
</p>
</next-route-announcer>
{back_to_main_button}
<script src="{assets}/{slug_script}">
</script>
</body>
</html>
"""


def _build_next_data(page: dict) -> str:
    page_props = {
        "cookies": {"accessibility": page["accessibility"]},
        "isUserBot": False,
    }
    if "slug" in page:
        page_props["slug"] = page["slug"]
    if "bubbles" in page:
        page_props["bubbles"] = page["bubbles"]

    payload = {
        "props": {
            "pageProps": page_props,
            "__N_SSP": True,
        },
        "page": page["next_page"],
        "query": page["next_query"],
        "buildId": cfg.BUILD_ID,
        "isFallback": False,
        "gssp": True,
        "scriptLoader": [],
    }
    return json.dumps(payload, separators=(",", ":"))


def render_page(page: dict) -> str:
    prefetch_link = (
        f'<link as="script" rel="prefetch" href="{cfg.ASSETS_DIR}/{cfg.SLUG_SCRIPT}">\n'
        if page["prefetch_slug"] else ""
    )
    back_to_main_button = ""
    if page["out"] == "contact.html":
        back_to_main_button = """<a id="StaticBackButton" class="dimensionalBox" href="./GENIUSV2.html" aria-label="Back to main page" title="Back to main page">
<svg viewBox="0 0 50 50" width="35" height="35" aria-hidden="true">
<path d="M10,46 L40,46 M10,46 L10,18 M40,46 L40,18 M4,22 L25,4 L46,22" fill="transparent" stroke-linecap="round" stroke-width="7" stroke="var(--color-text)">
</path>
</svg>
</a>"""
    return PAGE_TEMPLATE.format(
        html_attrs=_html_root_attrs(),
        title=page["title"],
        assets=cfg.ASSETS_DIR,
        per_page_script=page["per_page_script"],
        prefetch_link=prefetch_link,
        next_data=_build_next_data(page),
        back_to_main_button=back_to_main_button,
        slug_script=cfg.SLUG_SCRIPT,
    )


def write_pages() -> list[str]:
    written = []
    for page in cfg.PAGES:
        out_path = os.path.join(ROOT, page["out"])
        html = render_page(page).replace("\n", "\r\n")
        with open(out_path, "wb") as f:
            f.write(b"\xef\xbb\xbf" + html.encode("utf-8"))
        written.append(out_path)
    return written


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main() -> None:
    js_path = patch_index_bundle()
    print(f"patched {js_path}")
    for path in patch_accessibility_ui():
        print(f"patched {path}")
    for path in write_pages():
        print(f"wrote   {path}")


if __name__ == "__main__":
    main()
