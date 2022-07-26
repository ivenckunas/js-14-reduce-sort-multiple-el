"use strict";

import { students } from "./students.js";

// 1. atrinkti i nauja masyva studentus kurie turi masina

const hasCarArr = [];
const hasCarNewArr = students.map(function (student) {
  if (student.hasCar) {
    hasCarArr.push(student);
  }
});
console.log("hasCarArr ===", hasCarArr);

// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach

const newForEachArray = [];

const forEachCarArray = students.forEach((student) => {
  if (student.hasCar) {
    newForEachArray.push(student);
  }
});

console.log("newForEachArray ===", newForEachArray);

// 2. Atrinkti i nauja masyva zmones is Vilniaus

const fromVln = students.filter((student) => student.town === "Vilnius");

console.log("fromVln ===", fromVln);

// 3. Atrinkti i nauja masyva moteris

const femaleArr = students.filter((student) => student.gender === "female");

console.log("femaleArr ===", femaleArr);

// 4. suzinoti ar yra nors vienas zmogus is Kauno
// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
// 6 Grazinti nauja masyva kuriame yra visu zmoniu amziai;
// 6.1 Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
// 8. Gauti visu zmoniu metu suma .reduce
// 9. suskaiciuoti visu zmoniu metu vidurki
// 10. surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
// 11. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
