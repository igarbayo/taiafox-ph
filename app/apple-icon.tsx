/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { symbolDataUri } from "@/lib/symbol";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F3EA",
        }}
      >
        <img src={symbolDataUri("#1C3A2A")} width={124} height={124} alt="" />
      </div>
    ),
    size,
  );
}
