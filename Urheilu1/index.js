"use strict";

const Athlete = require("./Athlete");
//
// Esimerkit (Athlete objects)
//
const athletes = [
  new Athlete(
    "Kimi-Matias",
    "Räikkönen",
    "Iceman",
    1979,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg/500px-F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg",
    70,
    "Formula One",
    ["Formula One World Champion"],
  ),
  new Athlete(
    "Teemu",
    "Selänne",
    "Finnish Flash",
    1970,
    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Teemu_Selanne_on_the_ice_November_2010.jpg",
    90,
    "Ice Hockey",
    ["National record holder", "Hockey Hall of Fame inductee"],
  ),
];

// Näyttää getters/setters ja metodit
athletes[0].weightKg = 75; // uses setter
athletes[0].addAchievement("21 Formula One race wins");
athletes[1].addAchievement("Best Forward of the Olympic Games");

// Tulostaa
for (const a of athletes) {
  console.log("--------------------------------------------------");
  console.log(a.toString());
  console.log(`  Age (approx): ${a.getAge()} years`);
}
