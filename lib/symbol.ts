import { readFileSync } from "node:fs";
import { join } from "node:path";

// Data URI of the taiafox symbol (no wordmark) in the given color, for next/og images.
export function symbolDataUri(color: string) {
  const svg = readFileSync(join(process.cwd(), "app/icon.svg"), "utf8").replace(
    /<style>.*<\/style>/,
    `<style>path{fill:${color}}</style>`,
  );
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
