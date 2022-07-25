"use strict";

const nums = [-50, 14, 0, 24, 100, -45];

const appEl = document.getElementById("app");
const btnEl = document.getElementById("btn");

printArrInApp("Originalas", nums);
// isrikiuoti masyva abiem kryptim (a-z, z-a)

// nuo maziausio iki didziausio
const numsSort1 = nums.sort((a, b) => a - b);

printArrInApp("Array a-z", numsSort1);
// nuo didziausio iki maziausio
const numsSort2 = nums.sort((a, b) => b - a);
printArrInApp("Array z-a", numsSort2);
// atvaizduoti <div id="app"></div> orginala, az ir za versijas atsikruose <p></p> taguose

function printArrInApp(title, arr) {
  // title = orginalas | AZ | ZA
  // nusitaikyti i app
  // sukurti paragrafa
  const pEl = document.createElement("p");
  let resultString = title + ": [";
  // sudeti visus el is arr i paragrafa (butu gerai be el.textContent +=)
  const elString = arr.map((el) => `${el}, `).join(" ");
  //   arr.forEach((el) => {
  //     resultString += `${el}, `;
  //   });
  resultString += elString;
  resultString += " ]";
  pEl.append(resultString);
  // ideti p i app elementa
  appEl.append(pEl);
}

// <button>Sort</button> paspaudus mygtuka isrikiuojam orginala nuo A iki Z

console.log("btnEl ===", btnEl);

btnEl.addEventListener("click", () => {
  const pEl = appEl.querySelector("p");
  pEl.textContent = numsSort1.reverse().join(", ");
});
