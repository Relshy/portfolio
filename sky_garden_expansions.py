"""Generate the Sky Garden Expansions PDF."""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, KeepTogether,
)

OUT = "Sky_Garden_Expansions.pdf"

SKY_DEEP = HexColor("#1f3a68")
SKY_MID  = HexColor("#3b6fb6")
SKY_SOFT = HexColor("#7fb1e6")
LEAF     = HexColor("#3f7d4f")
SUN      = HexColor("#d99a2b")
CORAL    = HexColor("#c0533b")
INK      = HexColor("#1a1a1a")
MUTE     = HexColor("#5a5a5a")
PAGE_BG  = HexColor("#f6faff")


def styles():
    base = getSampleStyleSheet()
    out = {}
    out["title"] = ParagraphStyle(
        "Title",
        parent=base["Title"],
        fontName="Helvetica-Bold",
        fontSize=30,
        leading=34,
        textColor=SKY_DEEP,
        alignment=TA_LEFT,
        spaceAfter=4,
    )
    out["subtitle"] = ParagraphStyle(
        "Subtitle",
        parent=base["Normal"],
        fontName="Helvetica",
        fontSize=13,
        leading=17,
        textColor=MUTE,
        spaceAfter=18,
    )
    out["h1"] = ParagraphStyle(
        "H1",
        parent=base["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        textColor=SKY_MID,
        spaceBefore=14,
        spaceAfter=6,
    )
    out["h2"] = ParagraphStyle(
        "H2",
        parent=base["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=15,
        textColor=LEAF,
        spaceBefore=8,
        spaceAfter=3,
    )
    out["h2_fail"] = ParagraphStyle(
        "H2Fail",
        parent=out["h2"],
        textColor=CORAL,
    )
    out["body"] = ParagraphStyle(
        "Body",
        parent=base["Normal"],
        fontName="Helvetica",
        fontSize=10.5,
        leading=15,
        textColor=INK,
        alignment=TA_JUSTIFY,
        spaceAfter=6,
    )
    out["concept"] = ParagraphStyle(
        "Concept",
        parent=out["body"],
        fontName="Helvetica-Oblique",
        textColor=MUTE,
        spaceAfter=8,
    )
    out["footer"] = ParagraphStyle(
        "Footer",
        parent=base["Normal"],
        fontSize=8.5,
        textColor=MUTE,
        alignment=TA_CENTER,
    )
    out["tagline"] = ParagraphStyle(
        "Tagline",
        parent=base["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        textColor=SUN,
        spaceAfter=4,
    )
    return out


def banner(title, subtitle, s):
    """Return a small flowable group used as a section banner."""
    cell = Table(
        [[Paragraph(title, s["h1"])]],
        colWidths=[6.5 * inch],
    )
    cell.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), HexColor("#eaf2fb")),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LINEBEFORE", (0, 0), (0, -1), 4, SKY_MID),
    ]))
    blocks = [cell]
    if subtitle:
        blocks.append(Spacer(1, 4))
        blocks.append(Paragraph(subtitle, s["concept"]))
    return blocks


def section(title, tagline, concept, why, fail, s):
    parts = []
    parts += banner(title, tagline, s)
    parts.append(Paragraph("<b>The idea.</b> " + concept, s["body"]))
    parts.append(Paragraph("Why it would work", s["h2"]))
    parts.append(Paragraph(why, s["body"]))
    parts.append(Paragraph("Ways it could fail", s["h2_fail"]))
    parts.append(Paragraph(fail, s["body"]))
    parts.append(Spacer(1, 10))
    return KeepTogether(parts)


def build():
    doc = SimpleDocTemplate(
        OUT,
        pagesize=LETTER,
        leftMargin=0.9 * inch,
        rightMargin=0.9 * inch,
        topMargin=0.8 * inch,
        bottomMargin=0.8 * inch,
        title="Sky Garden — Expansion Proposals",
        author="Design notes",
    )
    s = styles()
    story = []

    # Cover block
    story.append(Paragraph("Sky Garden", s["title"]))
    story.append(Paragraph(
        "Six expansion concepts &mdash; what they unlock, "
        "and where each one is most likely to break.",
        s["subtitle"],
    ))

    # Intro
    story.append(Paragraph("Framing", s["h1"]))
    story.append(Paragraph(
        "Sky Garden already has the foundations of a satisfying farming loop: "
        "tile plowing, watering, planting, harvesting, an NPC-driven shop economy, "
        "a day&ndash;night cycle, and a chunk-streamed island. The question is "
        "what to add next that compounds those systems rather than spreading the "
        "design thin. Each concept below is rated against two questions: does it "
        "<b>reuse existing plumbing</b>, and does it <b>create a reason to log in tomorrow</b>?",
        s["body"],
    ))
    story.append(Spacer(1, 8))

    # Sections
    story.append(section(
        "1. Weather System &amp; Sprinklers",
        "Rain auto-waters tiles. Sprinklers are crafted Floon sinks.",
        "A weather cycle layered on top of the existing day&ndash;night system: "
        "clear, cloudy, light rain, storm. Rain ticks watering on plowed tiles "
        "automatically. Players craft sprinklers that water a small radius on a "
        "timer, freeing them from manual clicks once they scale up.",
        "It deepens the loop without adding a new genre. The existing watering "
        "code already knows how to mark a tile as watered; weather just becomes "
        "another caller. Sprinklers give Floons a meaningful sink, which fixes "
        "the inevitable late-game wallet bloat. It rewards planning &mdash; "
        "checking the forecast before planting becomes a real decision.",
        "Auto-watering can erase the moment-to-moment engagement that defines "
        "the early game. If sprinklers cover too much area or rain is too "
        "frequent, players stop touching their farm and the core fantasy "
        "evaporates. Random weather can also feel <i>punishing</i> when a "
        "drought stalls a session. Mitigation: gate sprinklers behind a "
        "mid-game milestone, cap radius, and make weather predictable a day "
        "ahead via an in-game forecast.",
        s,
    ))

    story.append(section(
        "2. Crop Contracts &amp; NPC Quests",
        "Shopkeepers post timed orders for premium pay.",
        "NPCs occasionally request a specific bundle &mdash; e.g. <i>10 carrots in "
        "the next 20 minutes</i> &mdash; in exchange for a Floon premium and a "
        "small reputation gain. Reputation unlocks rarer seeds, decor, and "
        "tool skins.",
        "It directs the grind. Right now a player picks the highest-margin "
        "crop and grows it forever; contracts give a reason to plant variety. "
        "Reputation is a long-tail retention hook that costs almost nothing "
        "to author past the first NPC. Contracts also reuse the existing "
        "shop and dialog frameworks, so engineering surface is small.",
        "Done badly, contracts feel like chores: a checklist tab the player "
        "drags themselves through. If reward tuning is off, one crop dominates "
        "and the meta collapses; if too generous, contracts replace the "
        "shop entirely. Time-pressure contracts can also alienate casual "
        "players who log in for ten minutes. Mitigation: keep timers generous, "
        "let contracts stack rather than expire harshly, and rotate prompts "
        "so the meta crop shifts week to week.",
        s,
    ))

    story.append(section(
        "3. Island Customization &amp; Decor",
        "Spend Floons on fences, paths, lanterns, ornamental trees.",
        "A pure cosmetic layer: decorative tiles, fences, lanterns that light "
        "at night, ornamental trees, archways. Bought with Floons through the "
        "existing shop; placed on owned tiles via a build mode.",
        "It's the cheapest expansion to ship and the highest-leverage retention "
        "tool. Players who customize an island feel ownership; ownership drives "
        "return visits and word-of-mouth. It plugs into the existing shop UI "
        "and currency. Lanterns at night even sells the day&ndash;night cycle "
        "harder than the cycle itself does.",
        "Decor without a social viewing layer is a private hobby &mdash; the "
        "value of an outfit is being seen in it. If players can't easily show "
        "their island to a friend, the retention boost is muted. Performance "
        "is the other failure mode: hundreds of decorative parts per island "
        "tank framerate on low-end devices. Mitigation: pair decor with a "
        "lightweight visit system (concept #6), enforce per-tile prop budgets, "
        "and use a single consolidated mesh per decor type.",
        s,
    ))

    story.append(PageBreak())

    story.append(section(
        "4. Animal Husbandry",
        "Chickens, cows, sheep produce passive resources.",
        "Buy livestock from a new vendor; place pens; feed them surplus crops; "
        "collect eggs, milk, wool on a cooldown. Outputs feed cooking, "
        "decor, or are sold raw.",
        "It opens a parallel income stream that uses crop surplus &mdash; "
        "right now any crop you don't sell is dead weight. Animals also create "
        "emotional attachment: a named cow is a reason to log in. Pens reuse "
        "the tile system, and feeding reuses the inventory&rarr;tile interaction "
        "the watering can already exemplifies.",
        "Animal AI and pathfinding are surprisingly expensive to make charming "
        "&mdash; a cow that clips through a fence ruins the fantasy in one "
        "frame. Husbandry can also feel disconnected from the gardening core: "
        "if it earns more than crops, the farm becomes a feed factory. "
        "Mitigation: keep animals stationary or grid-bound, and tune output "
        "so animals supplement rather than replace farming income.",
        s,
    ))

    story.append(section(
        "5. Seasonal Cycles &amp; Limited Events",
        "Spring through Winter, with seasonal crops and event tiles.",
        "A real-world-week-to-in-game-season mapping. Each season unlocks a "
        "small pool of seasonal crops, a themed decor set, and a time-limited "
        "event tile (a pumpkin patch in autumn, an ice-fishing hole in winter "
        "that ties into the existing spear-fishing minigame).",
        "Seasons create natural FOMO without aggressive monetization. They "
        "give marketing four launch beats per year for free. Tying winter to "
        "spear-fishing reuses an entire system that currently only has one "
        "context. Returning players have something new to discover even after "
        "a long break.",
        "Seasonal content is a content-treadmill commitment &mdash; a missed "
        "season is a visible content gap. New players who join in week three "
        "may feel locked out of the first two seasons forever, which sours "
        "the first impression. Mitigation: rotate seasons so every set comes "
        "back annually, and let a small subset of seasonal items remain "
        "purchasable year-round at a premium.",
        s,
    ))

    story.append(section(
        "6. Co-op Friend Islands",
        "Visit and tend a friend's farm; help unlocks shared rewards.",
        "A visit code or friends-list flow lets a player drop into another "
        "player's island. Visitors can water, harvest a capped amount, and "
        "leave gifts; the host gets a small bonus when friends help.",
        "The biggest organic-growth lever in farming-genre history is &ldquo;come "
        "play with me.&rdquo; A working visit system turns every active player "
        "into a recruiter. It also gives decor (concept #3) a viewing audience, "
        "which is what makes decor a retention system rather than a vanity "
        "system.",
        "Visit systems are the most expensive concept on this list by a wide "
        "margin: cross-server data, anti-griefing rules, permission scopes, "
        "duplication exploits, and trust UX all stack up fast. Shipped half-"
        "finished, it becomes the feature players cite when they quit. "
        "Mitigation: ship a strictly read-only &ldquo;tour&rdquo; mode first &mdash; "
        "no interaction, no economy impact &mdash; and only add helping/gifting "
        "after the social layer is proven.",
        s,
    ))

    # Recommendation
    story.append(Paragraph("Recommended sequencing", s["h1"]))
    story.append(Paragraph(
        "Ship <b>decor (#3)</b> first &mdash; it's the smallest engineering "
        "lift and the strongest retention return. Pair it with <b>contracts (#2)</b> "
        "to give players a reason to grow varied crops in the first place. "
        "Use the engineering room those two leave behind to build "
        "<b>weather and sprinklers (#1)</b>, which is where the design meaningfully "
        "deepens. <b>Animals (#4)</b> and <b>seasons (#5)</b> are the next "
        "layer once the core loop is humming. <b>Co-op (#6)</b> is the "
        "long-term bet &mdash; powerful, but only worth attempting after "
        "everything else has stabilized.",
        s["body"],
    ))
    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "The pattern across all six: each concept earns its place by "
        "<i>compounding</i> a system that already exists. Sky Garden's risk "
        "isn't running out of ideas &mdash; it's adding ones that don't talk "
        "to the rest of the game.",
        s["body"],
    ))
    story.append(Spacer(1, 24))
    story.append(Paragraph(
        "Sky Garden &middot; expansion proposals &middot; internal design notes",
        s["footer"],
    ))

    doc.build(story)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
