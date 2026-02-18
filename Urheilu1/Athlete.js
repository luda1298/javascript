"use strict";

const Person = require("./Person");

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
module.exports = Athlete;