"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function getStatistics() {
    var persons;
    try {
        persons = JSON.parse((0, fs_1.readFileSync)("../persons.json").toString());
    }
    catch (error) {
        console.error("Erreur lors de la lecture ou de l'analyse de persons.json:", error);
        return { ageMoyen: 0, tailleMoyenne: 0 };
    }
    var totalAge = 0;
    var totalHeight = 0;
    persons.forEach(function (person) {
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
