let answer;
let year;

console.log("ЧЕГО СКАЗАТЬ-ТО ХОТЕЛ, МИЛОК?!");

while (answer !== "ПОКА!") {
  answer = prompt(">");

  if (answer === "ПОКА!") {
    console.log("ДО СВИДАНИЯ, МИЛЫЙ!");
  } else if (answer === answer.toUpperCase()) {
    year = Math.floor(Math.random() * 21) + 1930;
    console.log("НЕТ, НИ РАЗУ С " + year + " ГОДА!");
  } else {
    console.log("АСЬ?! ГОВОРИ ГРОМЧЕ, ВНУЧЕК!");
  }
}
