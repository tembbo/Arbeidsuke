import pc from "picocolors";

const set = await Bun.file("ergonomics.json").json();

let male_count = 0;
let female_count = 0;

let male_age_total = 0;
let female_age_total = 0;

let left_count = 0;
let either_count = 0;
let right_count = 0;

for (let i = 0; i < set.length; i++) {
  if (set[i].gender === "Male") {
    male_count++;
    male_age_total += set[i].age;
  }

  if (set[i].gender === "Female") {
    female_count++;
    female_age_total += set[i].age;
  }

  if (set[i].writingpreference.startsWith("Left")) {
    left_count++;
  }
  if (set[i].writingpreference.startsWith("Either")) {
    either_count++;
  }
  if (set[i].writingpreference.startsWith("Right")) {
    right_count++;
  }
}

const total_count = male_count + female_count;

const male_mean = (male_age_total / male_count).toFixed(1);
const female_mean = (female_age_total / female_count).toFixed(1);
const overall_mean = (
  (male_age_total + female_age_total) /
  total_count
).toFixed(1);

const male_percentage = ((male_count / total_count) * 100).toFixed(1);
const female_percentage = ((female_count / total_count) * 100).toFixed(1);

const left_percentage = ((left_count / total_count) * 100).toFixed(1);
const either_percentage = ((either_count / total_count) * 100).toFixed(1);
const right_percentage = ((right_count / total_count) * 100).toFixed(1);

console.log();
console.log(pc.bold(pc.cyan("ergonomics.csv")));
console.log();

console.log(pc.bold("Count"));
console.log(
  `  ${pc.blue("Male:")}           ${pc.bold(male_count)} ${pc.gray("people")} (${male_percentage}%)`,
);
console.log(
  `  ${pc.magenta("Female:")}         ${pc.bold(female_count)} ${pc.gray("people")} (${female_percentage}%)`,
);
console.log(
  `  ${pc.gray("Total:")}          ${pc.bold(total_count)} ${pc.gray("people")}`,
);
console.log();

console.log(pc.bold("Mean age"));
console.log(
  `  ${pc.blue("Male:")}           ${pc.bold(male_mean)} ${pc.gray("years")}`,
);
console.log(
  `  ${pc.magenta("Female:")}         ${pc.bold(female_mean)} ${pc.gray("years")}`,
);
console.log(
  `  ${pc.yellow("Overall:")}        ${pc.bold(overall_mean)} ${pc.gray("years")}`,
);
console.log();

console.log(pc.bold("Writing preference"));
console.log(
  `  ${pc.red("Left-handers:")}   ${pc.bold(left_count)} ${pc.gray("people")} (${left_percentage}%)`,
);
console.log(
  `  ${pc.yellow("Either hand:")}    ${pc.bold(either_count)} ${pc.gray("people")} (${either_percentage}%)`,
);
console.log(
  `  ${pc.blue("Right-handers:")}  ${pc.bold(right_count)} ${pc.gray("people")} (${right_percentage}%)`,
);
