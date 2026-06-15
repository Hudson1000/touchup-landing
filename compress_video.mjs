import { createRequire } from "module";
import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";

const require = createRequire(import.meta.url);

// Try to get ffmpeg path from @ffmpeg-installer/ffmpeg
let ffmpegPath;
try {
  const installer = require("@ffmpeg-installer/ffmpeg");
  ffmpegPath = installer.path;
  console.log("ffmpeg found via @ffmpeg-installer:", ffmpegPath);
} catch {
  // fallback: try ffmpeg-static
  try {
    const ffmpegStatic = require("ffmpeg-static");
    ffmpegPath = ffmpegStatic;
    console.log("ffmpeg found via ffmpeg-static:", ffmpegPath);
  } catch {
    console.error("Neither @ffmpeg-installer/ffmpeg nor ffmpeg-static found.");
    process.exit(1);
  }
}

const input = path.resolve("public/video_depoimento_5.mp4");
const output = path.resolve("public/video_depoimento_5_comp.mp4");

if (!existsSync(input)) {
  console.error("Input file not found:", input);
  process.exit(1);
}

// Compress: CRF 28, scale to 720x-2 (portrait 4:5 friendly), AAC audio 96k
const cmd = `"${ffmpegPath}" -i "${input}" -vf "scale=720:-2" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k -movflags +faststart -y "${output}"`;

console.log("Running:", cmd);
try {
  execSync(cmd, { stdio: "inherit" });
  console.log("\nDone! Output:", output);
} catch (err) {
  console.error("FFmpeg error:", err.message);
  process.exit(1);
}
