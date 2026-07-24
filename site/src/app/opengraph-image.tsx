import { readFileSync } from "fs"
import { ImageResponse } from "next/og"
import { join } from "path"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const dynamic = "force-static"

export default async function Image() {
  const avatarData = readFileSync(
    join(process.cwd(), "public/assets/images/avatar.jpg")
  ).toString("base64")

  const iosevkaBlack = readFileSync(
    join(
      process.cwd(),
      "node_modules/@fontsource/iosevka/files/iosevka-latin-900-normal.woff"
    )
  )
  const iosevkaBold = readFileSync(
    join(
      process.cwd(),
      "node_modules/@fontsource/iosevka/files/iosevka-latin-700-normal.woff"
    )
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#AD4646",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${avatarData}`}
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
            border: "8px solid #F2C14E",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            color: "#F2F2F2",
            fontFamily: "Iosevka",
            fontSize: 76,
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          @sillyrelshy
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            color: "#F2F2F2",
            fontFamily: "Iosevka",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Roblox Developer
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Iosevka", data: iosevkaBlack, weight: 900, style: "normal" },
        { name: "Iosevka", data: iosevkaBold, weight: 700, style: "normal" },
      ],
    }
  )
}
