"""
Portfolio site config.

Edit the values below, then run `python build/build.py` to apply them.

The build script does two things:
  1. Patches GENIUSV2_files/index-554bf36b888722f7.js — the JS bundle
     that actually drives what shows on the live page. This is where
     bubble names, descriptions and links live.
  2. Regenerates GENIUSV2.html and contact.html for SSR/first-paint.

Why patching the JS is necessary: the page is a Next.js export. When
it loads, Next.js hydrates and overwrites the static HTML with whatever
data is baked into the JS chunk. So editing only the HTML has no effect
on the visible page once JS runs.
"""

# ---------------------------------------------------------------------------
# BUBBLES
# ---------------------------------------------------------------------------
# Each bubble dict supports:
#   id          - short identifier; used for DOM ids and as the value other
#                 bubbles' "connection" field references.
#   name        - <h2> title text shown on the bubble.
#   summary     - <p> description text shown on the bubble.
#   link        - URL slug for clicking (e.g. "contact" -> /contact). Omit
#                 for non-clickable bubbles.
#   connection  - id of the bubble this one visually connects to. Use "."
#                 for the central/root bubble (only `welcome` should use this).
#   size        - "small" | "medium" | "large". Omit to default to medium.
#   radius      - bubble visual radius (typical: 85-95).
#   position    - [x, y] on a 0-100 grid. Only set this on bubbles you want
#                 to anchor explicitly; other bubbles are positioned by the
#                 layout algorithm.
#   pivotPosition / deployPosition - layout hints. Only `welcome` typically
#                 uses these; omit on other bubbles.
#
# To add a bubble: append a new dict here. To move/rename: edit in place.
# To remove: delete the dict (and remove anything pointing to it via
# `connection`).
# ---------------------------------------------------------------------------

BUBBLES = [
    {
        "id": "welcome",
        "name": "Relshy",
        "summary": "I build things on Roblox. Scripting, modeling and animation ethically without the use of AI.",
        "connection": ".",
        "position": [50, 50],
        "pivotPosition": [50, 50],
        "deployPosition": [50, 50],
        "radius": 93,
        "size": "large",
    },
    {
        "id": "contact",
        "name": "Contact",
        "summary": "I respond the fastest on Discord.",
        "connection": "welcome",
        "link": "contact",
        "radius": 88,
    },
    {
        "id": "projects",
        "name": "Project Archive",
        "summary": "Some of the games and projects I've worked or are working on:",
        "connection": "welcome",
        "link": "projects",
        "radius": 89,
        "size": "medium",
    },
    {
        "id": "commissionWork",
        "name": "Commission Work",
        "summary": "Custom work I've built for clients, simple systems to large projects:",
        "connection": "projects",
        "link": "commission-work",
        "radius": 85,
        "size": "small",
    },
    {
        "id": "skyGarden",
        "name": "Sky Garden",
        "summary": "A hobby game me and my friend made featuring a lot of different mechanics (currently not released)",
        "connection": "projects",
        "link": "sky-garden",
        "radius": 88,
        "size": "small",
    },
    {
        "id": "gardensOfAria",
        "name": "Gardens of Aria",
        "summary": "A jungle combat game that requires fast reaction.",
        "connection": "projects",
        "link": "gardens-of-aria",
        "radius": 88,
        "size": "small",
    },
    {
        "id": "swordFantasy",
        "name": "Sword Fantasy",
        "summary": "An open world RPG in beta - I worked on combat systems, economic system and more.",
        "connection": "projects",
        "link": "sword-fantasy",
        "radius": 88,
        "size": "small",
    },
    {
        "id": "experience",
        "name": "Experience",
        "summary": "6 years on Roblox, 3.5 freelancing, with some backend and security experience too.",
        "connection": "welcome",
        "link": "experience",
        "radius": 89,
    },
    {
        "id": "backendInternship",
        "name": "Google Internship",
        "summary": "Spent a year at Google building backend tools and learning how real systems work.",
        "connection": "experience",
        "link": "backend-internship",
        "radius": 85,
        "size": "small",
    },
    {
        "id": "cybersecurity",
        "name": "Cybersecurity",
        "summary": "Hands-on security work - lots of systems analysis and finding real fixes.",
        "connection": "experience",
        "link": "cybersecurity",
        "radius": 85,
        "size": "small",
    },
    {
        "id": "freelanceWork",
        "name": "Freelance Work",
        "summary": "Roblox commissions: gameplay systems, scripting and more. I prioritize code security over anything.",
        "connection": "experience",
        "link": "freelance-work",
        "radius": 85,
        "size": "small",
    },
]


CONTACT_BUBBLES = [
    {
        "id": "welcome",
        "name": "Contact Relshy",
        "summary": "I respond the fastest on Discord.",
        "connection": ".",
        "position": [50, 50],
        "pivotPosition": [50, 50],
        "deployPosition": [50, 50],
        "radius": 93,
        "size": "large",
    },
    {
        "id": "email",
        "name": "Email",
        "summary": "relshytech@gmail.com",
        "connection": "welcome",
        "radius": 88,
    },
    {
        "id": "socials",
        "name": "Socials",
        "summary": "Discord, TikTok, and Roblox: @sillyrelshy",
        "connection": "welcome",
        "radius": 84,
        "size": "small",
    },
    {
        "id": "availability",
        "name": "Availability",
        "summary": "Open to commissions, freelance gigs, and interesting collabs.",
        "connection": "welcome",
        "radius": 84,
        "size": "small",
    },
]


# ---------------------------------------------------------------------------
# PAGE-LEVEL OPTIONS
# ---------------------------------------------------------------------------

# Set True to allow selecting text on the page. The original site sets
# `user-select: none` and adds a `prevent-drag` class to <html>, which
# blocks normal text selection. Flipping this to True removes both.
ALLOW_TEXT_SELECTION = True


# ---------------------------------------------------------------------------
# PAGES
# ---------------------------------------------------------------------------
# One entry per HTML file. All pages share the same bubble data above; only
# title and per-page Next.js routing data differ.
# ---------------------------------------------------------------------------

# Both pages use the same site chrome and styling. The index page boots the
# index route, while contact boots the shared [slug] route with the "contact"
# slug so it can show contact-specific content in the same visual system.
PAGES = [
    {
        "out": "GENIUSV2.html",
        "title": "Index | Relshy - I make stuff that works",
        "per_page_script": "index-554bf36b888722f7.js",
        "prefetch_slug": True,
        "accessibility": "Accessibility",
        "next_page": "/",
        "next_query": {},
    },
    {
        "out": "contact.html",
        "title": "Contact | Relshy",
        "per_page_script": "[slug]-8b3cb76b90243f99.js",
        "prefetch_slug": False,
        "accessibility": "Accessibility",
        "next_page": "/[slug]",
        "next_query": {"slug": "contact"},
        "slug": "contact",
        "bubbles": CONTACT_BUBBLES,
    },
]


# ---------------------------------------------------------------------------
# Internal constants (rarely changed)
# ---------------------------------------------------------------------------

BUILD_ID = "uWYTzIvmgsB1fHhFBNbFc"
SLUG_SCRIPT = "[slug]-8b3cb76b90243f99.js"
ASSETS_DIR = "./GENIUSV2_files"

# The JS chunk containing the bubble data. Bubbles get serialised into the
# array passed to PadBubblePositions("index", [...]) inside this file.
INDEX_BUNDLE = "GENIUSV2_files/index-554bf36b888722f7.js"
