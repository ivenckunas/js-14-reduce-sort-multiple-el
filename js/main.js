"use strict";

import { students, users } from "./students.js";

// isrikiuoti studentu paga amziu

const ageSort = students.sort((a, b) => {
  return a.age - b.age;
});

console.table(ageSort, [`age`]);
// isrikiuoti studentu pagal lyti
// sort turi grazinti 0 | 1 |-1
students.sort((a, b) => {
  return a.gender < b.gender ? 1 : -1;
});

students.sort((a, b) => {
  return a.gender < b.gender ? 1 : a.gender > b.gender ? -1 : 0;
});

console.table(students, ["name", "age", "gender"]);
