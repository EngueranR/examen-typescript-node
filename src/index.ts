import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

function getStatistics(): number {
  const persons: Person[] = JSON.parse(
    readFileSync("./persons.json").toString()
  );
  const ages: number[] = persons.map((person) => person.age);
  return Math.max(...ages);
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
