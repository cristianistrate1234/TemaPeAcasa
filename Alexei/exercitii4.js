/* Task 1: Studiați codul de mai jos și
 explicați în propriile cuvinte de ce funcția
  imbricată poate accesa variabila internă. * /
 */
const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}

myFunction();

//Deatita


/* Task 2: Counter */

/* Creați o funcție numită „sumare” care
 acceptă un parametru și utilizează un
 contor pentru a returna însumarea acelui
 număr. De exemplu, „sumare (4)” ar trebui să
 returneze 10 deoarece 1 + 2 + 3 + 4 este 10. * /
 */
// ???????????????????????????????
// function sumare(index) {
//
//     for (let i = 0; i < index.length; i++) {
//
//     }
// }
//
// console.log(sumare());
