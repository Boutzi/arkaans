import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "Arkaans — The Hub Where It All Began.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308.01 304.76">
  <path fill="#e94e1b" d="M29.88,134.61c4.32-33.16,21.28-62.65,47.78-83.04,5.46-4.2,11.19-7.92,17.14-11.13L117.08,1.22c-20.52,5.03-39.81,14.3-57,27.53C27.49,53.83,6.62,90.11,1.31,130.9c-2.87,22.09-.99,44.06,5.32,64.75l22.33-39.3c-.3-7.19-.03-14.45.92-21.73Z"/>
  <path fill="#e94e1b" d="M253.2,74.42c18.73,24.33,27.69,54.02,25.69,84.38l22.18,37.72c2.58-8.37,4.47-17.02,5.63-25.88,5.31-40.78-5.59-81.2-30.67-113.79C253.2,27.2,221.25,7.38,185.52,0l22.09,37.56c17.63,8.34,33.26,20.83,45.59,36.86Z"/>
  <path fill="#e94e1b" d="M216.64,259.15c-18.96,11.02-40.29,16.8-62.54,16.8s-44.06-5.89-62.83-16.77h-46.62c28.77,29.17,67.72,45.58,109.46,45.58,34.21,0,66.65-11.06,93.82-31.97,5.51-4.24,10.67-8.8,15.49-13.65h-46.76Z"/>
  <polygon fill="#e94e1b" points="172.26 35.53 135.75 35.53 58.58 227.93 89.92 227.93 142.79 97.24 154.01 69.22 218 227.93 249.43 227.93 172.26 35.53"/>
</svg>`;

const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

export default async function Image() {
  const font = await readFile(
    path.join(process.cwd(), "public/fonts/notJustGroovy.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#0c0c0c",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(233,78,27,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Logo icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDataUrl}
          width={110}
          height={109}
          alt=""
          style={{ marginBottom: "8px" }}
        />

        {/* ARKAANS */}
        <div
          style={{
            fontFamily: "NJG",
            fontSize: "128px",
            color: "#ffffff",
            letterSpacing: "6px",
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          ARKAANS
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.42)",
            letterSpacing: "0.5px",
            marginTop: "4px",
          }}
        >
          The Hub Where It All Began.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NJG",
          data: font,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
