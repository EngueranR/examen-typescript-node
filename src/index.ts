import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

interface Statistics {
  ageMoyen: number;
  tailleMoyenne: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(
    readFileSync("./persons.json").toString()
  );

  let totalAge: number = 0;
  let totalHeight: number = 0;

  persons.forEach((person) => {
    totalAge += person.age;
    totalHeight += person.height;
  });

  return {
    ageMoyen: totalAge / persons.length,
    tailleMoyenne: totalHeight / persons.length,
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
