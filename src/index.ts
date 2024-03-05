import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
  taille?: number;
}

interface Statistics {
  ageMoyen: number;
  tailleMoyenne: number;
}

function getStatistics(): Statistics {
  let persons: Person[];
  try {
    persons = JSON.parse(readFileSync("../persons.json").toString());
  } catch (error) {
    console.error(
      "Erreur lors de la lecture ou de l'analyse de persons.json:",
      error
    );
    return { ageMoyen: 0, tailleMoyenne: 0 };
  }

  let totalAge: number = 0;
  let totalHeight: number = 0;

  persons.forEach((person) => {
    totalAge += person.age;
    if (person.taille) {
      person.height = person.taille;
    }
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
