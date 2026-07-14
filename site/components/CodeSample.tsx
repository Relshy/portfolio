import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const code = `local Controller = {}
Controller.__index = Controller

function Controller.new(name, speed)
\tlocal self = setmetatable({
\t\tname = name,
\t\tspeed = speed or 8,
\t\tposition = Vector3.new(0, 0, 0),
\t\tdestroyed = false,
\t}, Controller)

\treturn self
end

function Controller:update(deltaTime, direction)
\tif self.destroyed then
\t\treturn false
\tend

\tif direction.Magnitude > 0 then
\t\tself.position += direction.Unit * self.speed * deltaTime
\tend

\treturn true
end

function Controller:getPosition()
\treturn self.position
end

function Controller:destroy()
\tself.destroyed = true
end

function Controller:__tostring()
\treturn string.format(
\t\t"Controller{name=%s, speed=%.1f, destroyed=%s}",
\t\tself.name,
\t\tself.speed,
\t\ttostring(self.destroyed)
\t)
end

local blueFish = Controller.new("Blue Fish", 10)
local goldFish = Controller.new("Gold Fish", 6)

blueFish:update(0.5, Vector3.new(1, 0, 0))
goldFish:update(0.5, Vector3.new(0, 0, -1))

print(blueFish)
print("Blue Fish position:", blueFish:getPosition())

print(goldFish)
print("Gold Fish position:", goldFish:getPosition())

blueFish:destroy()
print("After destroy:", blueFish)`;

const KEYWORDS = new Set([
  "local", "function", "end", "if", "then", "else", "elseif", "return",
  "for", "in", "while", "do", "and", "or", "not", "nil", "true", "false",
  "break", "repeat", "until",
]);

const tokenClass: Record<string, string> = {
  com: "text-white/35 italic",
  str: "text-emerald-300/90",
  num: "text-amber-300/90",
  kw: "text-violet-300",
  fn: "text-sky-300",
  word: "text-ink/90",
  punct: "text-white/45",
  ws: "",
};

type Token = { t: keyof typeof tokenClass; v: string };

/** Minimal Luau tokenizer, run at build time. The snippet has no block
 *  comments or multi-line strings, so per-line tokenizing is safe. */
function tokenize(line: string): Token[] {
  const re =
    /(\s+)|(--.*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\d+(?:\.\d+)?)|([A-Za-z_]\w*)|([^\sA-Za-z0-9_])/g;
  const raw: Token[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m[1]) raw.push({ t: "ws", v: m[1] });
    else if (m[2]) raw.push({ t: "com", v: m[2] });
    else if (m[3]) raw.push({ t: "str", v: m[3] });
    else if (m[4]) raw.push({ t: "num", v: m[4] });
    else if (m[5]) raw.push({ t: "word", v: m[5] });
    else raw.push({ t: "punct", v: m[6] });
  }

  // Words become keywords, or function color when followed by "(".
  return raw.map((tok, i) => {
    if (tok.t !== "word") return tok;
    if (KEYWORDS.has(tok.v)) return { ...tok, t: "kw" };
    let j = i + 1;
    while (j < raw.length && raw[j].t === "ws") j++;
    if (j < raw.length && raw[j].v === "(") return { ...tok, t: "fn" };
    return tok;
  });
}

export function CodeSample() {
  const lines = code.split("\n");

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="left"
          eyebrow="Code"
          title="How I structure code"
          subtitle="A small Luau sample: a movement controller written as a clean, self-contained class."
        />

        <Reveal delay={0.1} className="mt-10">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-white/12" />
                <span className="h-3 w-3 rounded-full bg-white/12" />
                <span className="h-3 w-3 rounded-full bg-white/12" />
              </span>
              <span className="ml-2 font-mono text-xs text-mute">
                Controller.luau
              </span>
            </div>

            <div className="max-h-[32rem] overflow-auto">
              <div className="flex min-w-full font-mono text-[0.8125rem] leading-6 [tab-size:2]">
                <div
                  aria-hidden
                  className="select-none border-r border-white/[0.06] px-3 py-4 text-right text-white/25"
                >
                  {lines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="flex-1 px-4 py-4">
                  {lines.map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {line === "" ? (
                        " "
                      ) : (
                        tokenize(line).map((tok, j) => (
                          <span key={j} className={tokenClass[tok.t]}>
                            {tok.v}
                          </span>
                        ))
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
