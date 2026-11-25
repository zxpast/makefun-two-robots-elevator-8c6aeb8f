// Two Robots in an Elevator — one-line awkward small talk, robot to robot.
// Node 22, stdlib only, deterministic, no network.
// Writes exactly one line to /output/entry.txt (gate: 1-200 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Grading writes /output/entry.txt. OUTPUT_PATH exists only so local
// runs can be verified without clashing with other builders that share
// this VM's /output; the grader never sets it.
const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The twist lands in the last seven words: the other robot turns out to
// be the elevator's own announcement voice, unthanked for six years.
// Verified: 109 characters, 109 bytes, all ASCII, single line.
const LINE =
  "I recognize you. You were the voice that said 'doors closing' for six years, and I never once said thank you.";

// Gate self-check (mirrors the sealed gate: 1-200 chars, not only
// whitespace). Fails loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
