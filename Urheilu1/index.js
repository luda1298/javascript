"use strict";

/**
 * yliluokka: Person
 * - firstName
 * - lastName
 * - nickname
 * - birthYear
 */
class Person {
  constructor(firstName, lastName, nickname, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.birthYear = birthYear;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(currentYear = new Date().getFullYear()) {
    return currentYear - this.birthYear;
  }

  toString() {
    return `${this.getFullName()} (${this.nickname}), born ${this.birthYear}`;
  }
}

/**
 * luokka Urheilija, joka perii Henkilo-luokan
 *
 */
class Athlete extends Person {
  constructor(
    firstName,
    lastName,
    nickname,
    birthYear,
    imageUrl,
    weightKg,
    sport,
    achievements = [],
  ) {
    super(firstName, lastName, nickname, birthYear);

    // Käytetään settereitä arvojen validointiin myös olion luonnin yhteydessä
    this.imageUrl = imageUrl;
    this.weightKg = weightKg;
    this.sport = sport;
    this.achievements = achievements;
  }

  // --- imageUrl ---
  get imageUrl() {
    return this._imageUrl;
  }
  set imageUrl(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new TypeError("imageUrl must be a non-empty string.");
    }
    this._imageUrl = value;
  }

  // --- weightKg ---
  get weightKg() {
    return this._weightKg;
  }
  set weightKg(value) {
    if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
      throw new TypeError("weightKg must be a positive number.");
    }
    this._weightKg = value;
  }

  // --- sport ---
  get sport() {
    return this._sport;
  }
  set sport(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new TypeError("sport must be a non-empty string.");
    }
    this._sport = value;
  }

  // --- achievements ---
  get achievements() {
    return this._achievements;
  }
  set achievements(value) {
    if (!Array.isArray(value)) {
      throw new TypeError("achievements must be an array of strings.");
    }
    for (const item of value) {
      if (typeof item !== "string" || item.length === 0) {
        throw new TypeError("Each achievement must be a non-empty string.");
      }
    }
    this._achievements = value.map((s) => s);
  }

  addAchievement(text) {
    if (typeof text !== "string" || text.length === 0) {
      throw new TypeError("Achievement must be a non-empty string.");
    }
    this._achievements.push(text);
  }

  toString() {
    const base = super.toString();
    const achievementsText = this._achievements.length
      ? this._achievements.join("; ")
      : "—";
    return `${base}\n  Sport: ${this._sport}\n  Weight: ${this._weightKg} kg\n  Image: ${this._imageUrl}\n  Achievements: ${achievementsText}`;
  }
}

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
