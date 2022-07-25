"use strict";

import { students, users } from "./students.js";

console.log("swx0");

const nums = [1, 2, 3, 4];

let total = 0;

nums.forEach((sk) => (total += sk));

console.log("total ===", total);

// array.reduce - multi toolas gali buti naudojamas bet kokioms transformacijoms, dazniausiai naudojamas bendrai sumai, didziausiam, maziausiam skaiciui ir pan. Gali grazinti objektus.
// array.reduce((acc, currentValue, index, arr) => {}, 0)
// acc - akumuliatorius- reiksme kuri grazinama nesa informacija per visus ciklus(total)
// currentValue - einamoji reiksme(sk)
// {} - kodo blokas is kurio grazinama reiksme issaugoma i acc
// 0 - pradine reiksme acc'ui

console.group("reduceNums");
const reduceNums = nums.reduce((total, sk, idx) => {
  console.log("idx ===", idx);
  console.log("sk ===", sk);
  console.log("total ===", total);
  console.log("==================================");
  return total + sk;
}, 0);

console.log("reduceNums ===", reduceNums);
console.groupEnd();

// naudojant reduce gauti vidurki be isoriniu kintamuju

const avgNums = nums.reduce((avg, sk) => {
  return avg + sk / nums.length;
}, 0);

console.log("avgNums ===", avgNums);

// users exp vidurkis

const totalExp = users.reduce((totalExp, uObj) => {
  return totalExp + uObj.exp;
}, 0);

console.log("totalExp ===", totalExp);

const avgExp = users.reduce((totalExp, uObj) => {
  return totalExp + uObj.exp / users.length;
}, 0);

console.log("avgExp ===", avgExp);

// skaiciuojam su reduce studentu age avg

const studentsAgeAvg = students.reduce((totalAge, studentsObj) => {
  return totalAge + studentsObj.age / students.length;
}, 0);

console.log("studentsAgeAvg ===", studentsAgeAvg.toFixed(0));

// sukurti funkcija kuri grazina kiek yra vyru ir moteru objekto pavidalu
// {
//   vyrai: 15;
//   moterys: 10;
// }

function getMalesFemales() {
  const resObj = {
    vyrai: 0,
    moterys: 0,
  };

  students.forEach((personObj) => {
    if (personObj.gender === "male") {
      return resObj.vyrai++;
    }
    resObj.moterys++;
  });
  console.log("resObj ===", resObj);
  return resObj;
}

getMalesFemales();

// padaryti su reduce ta pati

const getMalesFemalesReduce = students.reduce(
  (resObj, personObj) => {
    // logika
    // rezultatai
  },
  {
    vyrai: 0,
    moterys: 0,
  }
);
