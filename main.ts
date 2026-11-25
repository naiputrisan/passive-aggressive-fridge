// Notes From a Passive-Aggressive Fridge.
// The smart fridge leaves one dry, petty note for its owner on its door
// screen, then writes it to /output/entry.txt for the judge to read.
import { mkdirSync, writeFileSync } from "node:fs";

const note =
  "You opened my door 47 times today and took nothing. At this point you're just browsing me like a museum.";

// The scorer only accepts 1 to 200 characters, so refuse to write
// anything outside that range instead of shipping an invalid entry.
if (note.length < 1 || note.length > 200 || note.trim().length === 0) {
  throw new Error(`note is ${note.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
console.log(note);
