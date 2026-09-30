/**
 * Script untuk generate file WAV sound effects sederhana
 * Jalankan: node scripts/generate-sounds.js
 */
const fs = require("fs");
const path = require("path");

function writeWAV(filePath, samples, sampleRate = 44100) {
  const numSamples = samples.length;
  const buffer = Buffer.alloc(44 + numSamples * 2);

  // RIFF header
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);        // PCM chunk size
  buffer.writeUInt16LE(1, 20);         // PCM format
  buffer.writeUInt16LE(1, 22);         // Mono
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  for (let i = 0; i < numSamples; i++) {
    const clamped = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(Math.round(clamped * 32767), 44 + i * 2);
  }

  fs.writeFileSync(filePath, buffer);
  console.log(`✓ Created: ${path.basename(filePath)}`);
}

function generateSamples(durationSec, sampleRate, fn) {
  const n = Math.round(durationSec * sampleRate);
  const arr = new Float32Array(n);
  for (let i = 0; i < n; i++) arr[i] = fn(i / sampleRate, i / n);
  return arr;
}

const SR = 44100;
const audioDir = path.join(__dirname, "../public/audio");
if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

// 1. click.mp3 (WAV) — short 800Hz tick, 80ms
writeWAV(path.join(audioDir, "click.mp3"),
  generateSamples(0.08, SR, (t, p) => {
    const env = Math.exp(-t * 60);
    return Math.sin(2 * Math.PI * 800 * t) * env * 0.25;
  })
);

// 2. select.mp3 — two-tone ascending blip, 120ms
writeWAV(path.join(audioDir, "select.mp3"),
  generateSamples(0.12, SR, (t, p) => {
    const freq = p < 0.5 ? 600 : 900;
    const env = Math.exp(-t * 40);
    return Math.sin(2 * Math.PI * freq * t) * env * 0.22;
  })
);

// 3. play.mp3 — soft ascending chime, 200ms
writeWAV(path.join(audioDir, "play.mp3"),
  generateSamples(0.2, SR, (t, p) => {
    const freq = 500 + p * 500;
    const env = Math.sin(Math.PI * p);
    return Math.sin(2 * Math.PI * freq * t) * env * 0.28;
  })
);

// 4. correct.mp3 — happy two-note chime, 400ms
writeWAV(path.join(audioDir, "correct.mp3"),
  generateSamples(0.4, SR, (t, p) => {
    const freq = p < 0.5 ? 660 : 880;
    const env = p < 0.5
      ? Math.sin(Math.PI * (p / 0.5))
      : Math.sin(Math.PI * ((p - 0.5) / 0.5));
    return (Math.sin(2 * Math.PI * freq * t) + 0.3 * Math.sin(2 * Math.PI * freq * 2 * t)) * env * 0.3;
  })
);

// 5. wrong.mp3 — low descending buzz, 350ms
writeWAV(path.join(audioDir, "wrong.mp3"),
  generateSamples(0.35, SR, (t, p) => {
    const freq = 300 - p * 100;
    const env = Math.exp(-t * 8);
    return (Math.sin(2 * Math.PI * freq * t) + 0.4 * Math.sin(2 * Math.PI * freq * 3 * t)) * env * 0.3;
  })
);

// 6. complete.mp3 — triumphant 3-note ascend, 700ms
writeWAV(path.join(audioDir, "complete.mp3"),
  generateSamples(0.7, SR, (t, p) => {
    const note = p < 0.33 ? 523 : p < 0.66 ? 659 : 784; // C5 E5 G5
    const seg = p < 0.33 ? p / 0.33 : p < 0.66 ? (p - 0.33) / 0.33 : (p - 0.66) / 0.34;
    const env = Math.sin(Math.PI * seg);
    return (Math.sin(2 * Math.PI * note * t) + 0.25 * Math.sin(2 * Math.PI * note * 2 * t)) * env * 0.32;
  })
);

console.log("\n🎵 All sound effects generated in public/audio/");
