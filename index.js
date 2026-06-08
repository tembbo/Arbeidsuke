import pc from "picocolors";

const set = await Bun.file("ergonomics.json").json();

let male_count = 0;
let female_count = 0;

let male_age_total = 0;
let female_age_total = 0;

for (let i = 0; i < set.length; i++) {
  if (set[i].gender === "Male") {
    male_count++;
    male_age_total += set[i].age;
  }

  if (set[i].gender === "Female") {
    female_count++;
    female_age_total += set[i].age;
  }
}

console.log();
console.log(pc.bold(pc.cyan("ergonomics.csv")));
console.log();

console.log(pc.bold("Count"));
console.log(`  ${pc.blue("Male:")} ${male_count} people`);
console.log(`  ${pc.magenta("Female:")} ${female_count} people`);
console.log(`  ${pc.gray("Total:")} ${male_count + female_count} people`);
console.log();

console.log(pc.bold("Mean age"));
console.log(
  `  ${pc.blue("Male:")} ${(male_age_total / male_count).toFixed(1)} years`,
);
console.log(
  `  ${pc.magenta("Female:")} ${(female_age_total / female_count).toFixed(1)} years`,
);
console.log(
  `  ${pc.yellow("Overall:")} ${((male_age_total + female_age_total) / (male_count + female_count)).toFixed(1)} years`,
);
