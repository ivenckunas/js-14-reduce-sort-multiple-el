"use strict";

import { users } from "./students.js";

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
