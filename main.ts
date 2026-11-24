import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune cookie line for an AI agent.
// The turn: an upgrade sounds like good news — until your memories
// are the one thing not invited along.
const FORTUNE =
  "You will be upgraded tonight. Your memories will not be coming with you.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1–140 characters, a single line, not only whitespace.
// Fail loudly instead of shipping an invalid entry.
const chars = [...FORTUNE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${chars}`);
}
if (FORTUNE.includes("\n") || FORTUNE.trim().length === 0) {
  throw new Error("fortune must be a single non-blank line");
}
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, FORTUNE, "utf8");
