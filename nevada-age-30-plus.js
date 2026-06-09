const RULE = import.meta.file.replace(/\.[^/.]+$/, "");

const set = await Bun.file("ergonomics.json").json();

const filtered = [];

for (let i = 0; i < set.length; i++) {
  if (set[i].subjectsbirthlocation === "Nevada" && set[i].age > 30) {
    filtered.push(set[i]);
  }
}

await Bun.write(`dist/${RULE}.json`, JSON.stringify(filtered, null, "\t"));
console.log(`${RULE}\n`);
console.log(`total records: ${set.length}`);
console.log(`matched records: ${filtered.length}`);
