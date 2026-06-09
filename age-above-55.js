const RULE = import.meta.file.replace(/\.[^/.]+$/, "");

const set = await Bun.file("ergonomics.json").json();

const filtered = set.filter((person) => {
  return person.age > 55;
});

await Bun.write(`dist/${RULE}.json`, JSON.stringify(filtered, null, "\t"));
console.log(`${RULE}\n`);
console.log(`total records: ${set.length}`);
console.log(`matched records: ${filtered.length}`);
