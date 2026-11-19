// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry itself is the post on X: the house reads the post from X and
// judges its first picture and its text. This program only hands the house
// the post's address, by copying POST.json from the repository root into
// the output directory the grader reads. It does no network, reads no
// clock, and touches no file outside the repository.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

let payload: string;
try {
  payload = readFileSync(source, "utf8");
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

const parsed: unknown = (() => {
  try {
    return JSON.parse(payload);
  } catch {
    console.error(`${source} is not valid JSON`);
    process.exit(1);
  }
})();

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  console.error(`${source} must hold a JSON object with a url`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, payload);
