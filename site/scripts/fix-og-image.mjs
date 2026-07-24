// Next's static export writes the opengraph-image route to a file with no
// extension, which static hosts like GitHub Pages won't reliably serve with
// a correct Content-Type header — Discord/Twitter then refuse the image.
// This renames it to a real .png and rewrites the meta tag URLs to match.
import { readdirSync, readFileSync, renameSync, writeFileSync } from "fs"
import { join } from "path"

const outDir = join(process.cwd(), "out")
const oldPath = join(outDir, "opengraph-image")
const newPath = join(outDir, "opengraph-image.png")

renameSync(oldPath, newPath)
console.log("Renamed opengraph-image -> opengraph-image.png")

const htmlFiles = readdirSync(outDir, { recursive: true }).filter(
  (f) => typeof f === "string" && f.endsWith(".html")
)

const urlPattern = /\/opengraph-image(\?[a-zA-Z0-9]*)?/g

for (const file of htmlFiles) {
  const path = join(outDir, file)
  const contents = readFileSync(path, "utf8")
  if (!contents.includes("/opengraph-image")) continue
  const patched = contents.replace(urlPattern, "/opengraph-image.png")
  writeFileSync(path, patched)
}

console.log(`Patched ${htmlFiles.length} HTML files' og:image URLs`)
