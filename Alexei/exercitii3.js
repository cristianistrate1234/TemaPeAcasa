// Pentru a ne ajuta să folosim exercitii cu probleme
// din lumea reală, vom simula un dealer de mașini second-hand
// care are în inventar 50 de mașini.

// Distribuitorul de mașini are toate stocurile lor găzduite în
// Pseudo array-ul de mai jos. Derulați în jos
// pentru a afla cum puteți ajuta dealerul auto.
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
    { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
    { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
    { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
    { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
    { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
    { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
    { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
    { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
    { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
    { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
    { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
    { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
    { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
    { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
    { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
    { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
    { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
    { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
    { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
    { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
    { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
    { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
    { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
    { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
    { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
    { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
    { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
    { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
    { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
    { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
    { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
    { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
    { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
    { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
    { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
    { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
    { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
    { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
    { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
    { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
    { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
    { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
    { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
    { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
];

// Exemplu 1 for loop:

// const arr = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// 'a' 'b' 'c' 'd'

// Exemplu 2 for loop:

// const arr = [12, 13, 14, 15];
// const evens = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) { evens.push(arr[i]); }
// }
// console.log(evens);
// [12, 14]

// ==== Exercitiu 1 ====
// Dealerul nu își poate aminti informațiile pentru o mașină cu un
// ID de 33 pe lotul său. Ajutați-l pe dealer să afle ce mașină
// are un ID de 33 înregistrând anul, marca și modelul mașinii
// în jurnalul de consolă furnizat mai jos:
console.log(inventory.filter((item) => item.id === 33));

// ==== Exercitiul 2 ====
// Dealerul are nevoie de informațiile privind ultima
// mașină din inventar. Care este marca și modelul ultimei
// mașini din inventar?
// Conectați marca și modelul în consolă.let lastCar = 0;
lastCar = 0;
console.log(inventory[inventory.length -1])

// ==== Challenge 3 ====
// Echipa de marketing dorește ca modelele de mașini să fie listate
// alfabetic pe site. Sortează toate numele modelelor de mașini
// în ordine alfabetică și înregistrează rezultatele în consolă
let carModels = [];
let carModelsSorted = [];

function models(object,car_model) {
    return object.sort((a,b) => a[car_model].localeCompare(b[car_model]))
}
console.log(models(inventory,"car_model"));

// ==== Challenge 4 ====
// Echipa de contabilitate are nevoie de toți anii de la fiecare
// mașină de pe lot. Creați un nou array din datele dealerului
// care  conține doar anii de mașină și înregistrați rezultatul
// în consolă.
let carYears = [];

const car = inventory.car_year;
// console.log(car);

const corr = (object) => {
  return object.map(index =>index.car_model+": "+index.car_year)
}
console.log(corr(inventory));

//----------------00000000000000000000000000
const corrse = (object) => object.map(index =>index.car_year)
console.log(corrse(inventory));
//------------------------------000000000000

// ==== Challenge 5 ====
// Managerul lotului de mașini trebuie să afle câte mașini sunt mai
// vechi decât anul 2000. Folosind array-ul carYears pe care tocmai
// ați creat-o, aflați câte mașini au fost făcute înainte de
// anul 2000, completând array-ul vechi de mașini și înregistrând
// lungimea acestuia.
let oldCars = [];
const corrs = (object,add) => {
add = object.filter((element) => element.car_year <= 2000)
    return add  //.length

}
console.log(corrs(inventory,"car_year"));



// ==== Challenge 6 ====
// Un cumpărător este interesat să vadă în inventar doar mașinile
// BMW și Audi. Returnează o matrice care conține doar mașini
// BMW și Audi. Odată ce ați completat array-ul BMWAndAudi,
// utilizați JSON.stringify () pentru a afișa rezultatele array-ului
// în consolă.
let BMWAndAudi = [];
const corNome = (object,add) => {
    add = object.filter((element) => element.car_make <= "BMW" || element.car_make <= "Audi" )
    return add  //.length

}

console.log(corNome(inventory, "car_make"));