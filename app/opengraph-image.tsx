/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { symbolDataUri } from "@/lib/symbol";

export const dynamic = "force-static";
export const alt = "Taiafox";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C3A2A",
        }}
      >
        <img src={symbolDataUri("#F7F3EA")} width={320} height={320} alt="" />
      </div>
    ),
    size,
  );
}
