import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}
interface Statistics {
  meanAge: number;
  meanHeight: number;
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
    meanAge: totalAge / persons.length,
    meanHeight: totalHeight / persons.length,
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
