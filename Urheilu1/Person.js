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

module.exports = Person;
