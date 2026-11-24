// The Houseplant Out-of-Office — make.fun entry.
// Writes the entry text (one out-of-office auto-reply, as if a houseplant
// sent it) to /output/entry.txt, where the grader reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office until someone waters me. Last drink: March. Urgent? The fern has my passwords — and my will to live.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
