/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs.
*/
let a = 5;
let b = 5;

if (a > b) {
  console.log(`a: ${a} skaicius yra didesnis `);
}
if (a < b) {
  console.log(`b: ${b} skaicius yra didesnis `);
} else {
  console.log(`Jie lygus`);
}

/*
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.
*/
for (let i = 1; i < 10; i++) {
  console.log(i);
}

/*
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.
*/
console.log("========3==========");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

*/
console.log("=====4=====");

for (let i = 0; i < 10; i++) {
  i = Math.floor(Math.random() * 11);
  console.log(i);
}

/*
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
*/
console.log("============5========");
let c = 0;
while (c !== 5) {
  c = Math.floor(Math.random() * 11);
}
console.log(c);

/*
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.
*/
console.log("============6=========");
let arr = [];
let largest = 0;
for (let i = 20; i < 30; i++) {
  arr.push(Math.floor(Math.random() * (29 - 20 + 1) + 20));
  if (i > arr) {
    largest = arr;
  }
}
console.log(arr, `Dizdziausias ${largest}`);

/*
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.
*/
console.log("===========4============");
let string = ["A", "B", "C", "D"];
let result = [];
let strin = 100;
let mostA = 0;
let mostB = 0;
let mostC = 0;
let mostD = 0;
for (let i = 0; i < strin; i++) {
  result.push(string[Math.floor(Math.random() * string.length)]);
  if (result[i] === result[0]) {
    mostA++;
  }
  if (result[i] === result[1]) {
    mostB++;
  }
  if (result[i] === result[2]) {
    mostC++;
  }
  if (result[i] === result[3]) {
    mostD++;
  }
  {
  }
}

console.log(
  result,
  result.length,
  `A: ${mostA}, B:${mostB}, C: ${mostC}, D: ${mostD}`
);

/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
*/
console.log("=============8===========");
function lygineSuma(a, b) {
  if (typeof a !== [] && b !== []) {
    return `Kintamasis yra masyvas`;
  }
  if (typeof a === "number" && typeof b === "number") {
    return `Kintamieji yra skaiciai`;
  } else {
    return `Error netinkamas tipas`;
  }
}

console.log(lygineSuma([5, 5], [4, 5, 6]));

/*
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė.
*/
console.log("=========9==========");
function kintamieji(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    return a + b;
  }
  if (typeof a !== [] && b !== []) {
    return a.length + b.length;
  }
  if (
    typeof a !== "number" ||
    typeof a !== [] ||
    typeof b !== "numbe" ||
    (typeof b !== [] && (a + b) % 2 === 0)
  ) {
    return `Jie yra lyginiai ${(a, b)}`;
  } else {
    return `Ju suma nelygine ${(a, b)}`;
  }
}

console.log(kintamieji(4, [6, 3]));

console.log("===========");

/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)
*/
function pirminisSkaicius(vienas) {
  if (typeof vienas !== "number");
  {
  }
  {
  }
}

/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - 
masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX".
*/

function telefonoNumeris(nr) {
  if (typeof nr !== "object") {
    return "ERROR===> Not a number";
  }
  if (nr.length === 0) {
    return "ERROR: List cant be empty";
  }
  for (let i = 0; i <= nr.length; i++) {
    if (typeof nr !== [] && nr.length === 10) {
      return `(${nr[0]} ${nr[1]} ${nr[2]}) ${nr[3]} ${nr[4]} ${nr[5]} - ${nr[6]} ${nr[7]} ${nr[8]} ${nr[9]}`;
    }
    if (nr.length < 10) {
      return "ERROR===> Not enough numbers, numbers format: ";
    }
  }
}
console.log(telefonoNumeris([10, 2, 3, 4, 6, 5, 8, 9, 4, 9]));
