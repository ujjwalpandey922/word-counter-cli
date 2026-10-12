#!/usr/bin/env node
import { readFile } from "node:fs/promises";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: word-counter-cli <file>");
  process.exit(1);
}

let data;
try {
  data = await readFile(filePath, "utf-8");
} catch (err) {
  console.error(`Could not read "${filePath}": ${err.message}`);
  process.exit(1);
}

if (!data.trim()) {
  console.error("No data found in the file.");
  process.exit(1);
}

const wordCount = {};
let totalWords = 0;

for (const word of data.split(/\s+/)) {
  const cleanedWord = word.toLowerCase().replace(/[^\w]/g, "");
  if (cleanedWord) {
    wordCount[cleanedWord] = (wordCount[cleanedWord] || 0) + 1;
    totalWords++;
  }
}

console.log(`Total words: ${totalWords}`);
console.log(`Unique words: ${Object.keys(wordCount).length}`);
console.table(wordCount);
