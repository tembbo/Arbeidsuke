const RULE = import.meta.file.replace(/\.[^/.]+$/, "");

const set = await Bun.file("ergonomics.json").json();

const filtered = [];

for (const person of set) {
  if (
    person.gender === "Male" &&
    person.weightlbs > 250 // ~113 kg
  ) {
    filtered.push(person);
  }
}

await Bun.write(`dist/${RULE}.json`, JSON.stringify(filtered, null, "\t"));
console.log(`${RULE}\n`);
console.log(`total records: ${set.length}`);
console.log(`matched records: ${filtered.length}`);
