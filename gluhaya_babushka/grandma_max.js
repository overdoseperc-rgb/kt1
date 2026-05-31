let answer;
let byeCount = 0;
let year;

console.log("ЧЕГО СКАЗАТЬ-ТО ХОТЕЛ, МИЛОК?!");

while (byeCount < 3) {
  answer = prompt(">");

  if (answer === "ПОКА!") {
    byeCount = byeCount + 1;

    if (byeCount === 3) {
      console.log("ДО СВИДАНИЯ, МИЛЫЙ!");
    } else {
      year = Math.floor(Math.random() * 21) + 1930;
      console.log("НЕТ, НИ РАЗУ С " + year + " ГОДА!");
    }
  } else {
    byeCount = 0;

    if (answer === answer.toUpperCase()) {
      year = Math.floor(Math.random() * 21) + 1930;
      console.log("НЕТ, НИ РАЗУ С " + year + " ГОДА!");
    } else {
      console.log("АСЬ?! ГОВОРИ ГРОМЧЕ, ВНУЧЕК!");
    }
  }
}
