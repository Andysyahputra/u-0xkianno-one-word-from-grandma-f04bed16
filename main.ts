// One Word From Grandma — the single word a grandma would text about AI.
// Final word: "Robot" — warm, a little baffled, instantly grandma, and tied
// to machines. A grandma meeting AI for the first time would just text:
// Robot.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Robot";
const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1-30 UTF-8 characters, not only whitespace, and the
// entry must be exactly one word. Fail loudly instead of writing bad output.
const byteLength = Buffer.byteLength(WORD, "utf8");
if (/\s/.test(WORD) || byteLength < 1 || byteLength > 30) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must contain exactly the word and nothing else.
writeFileSync(OUTPUT_PATH, WORD, "utf8");
