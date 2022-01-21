// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variabile
/* Creați variabile ( principala, rata dobânzii
și ani cu valorile 200000, 0,05 și respectiv 30).
 Creați o altă variabila numită nume și dați-i valoarea propriului nume.*/
let principala = 200000;
let rata_dobânzii = 0.05;
let ani = 30;
let nume = "Alexei"




// 🏡 Task 1.5:  Math
/* Pentru a crea un calculator al ratei ipotecii lunare
 , trebuie să cunoaștem numărul de ani în luni și rata lunară a
 dobânzii.
(1) Creați o variabilă numită „interestInterestRate”
și dați-i valoarea ratei dobânzii împărțită la 12.
(2) Creați o altă variabilă numită „perioade”
și dați-i valoarea de (ani * 12).
*/
let monthInterestRate = rata_dobânzii / 12;
let perioade = ani * 12;
console.log(perioade);


// 🏡 Task 2:  Math
/* Creați-vă calculatorul! Utilizați formula din
ReadMe(de asemenea, mai jos) pentru a rula
 calcule  dvs. Salvați valoarea finală într-o
  variabilă numită monthRate.
M = P [I (1 + I) ^ N] / [(1 + I) ^ N - 1]
Sugestie: deși aceste calcule pot fi făcute într-o
 singură linie, ar putea fi util să creați
 variabile separate pentru a păstra părți ale
  ecuației. Ar putea arăta astfel:
(1) Creați o variabilă numită n1 și setați-o egală
 cu (1 + MonthInterestRate) ^ N
(2) Creați o variabilă numită numerator și setați-o
 egală cu p * n1 * monthInterestRate
(3) Creați o variabilă numită numitor și setați-o
 egală cu n1 - 1
(4) Creați o variabilă numită monthRate și setați-o
 egală cu numărător / numitor
Sugestie # 2: va trebui să utilizați obiectul
 `math` pentru a impărți din acest calcul!
Când matematica este corectă, rata lunară va fi
egală cu 1073,64*/

let n1 = (1 + monthInterestRate);
let  numerator =  perioade * n1 * monthInterestRate;
let numitor = n1 - 1;
let monthRate =  numerator / numitor;
console.log(monthRate);


// 🏡 Task 3: Function
/* Creați o funcție numită `mortgageCalculator` care combină toți
pașii de la sarcina 1 și 2 și returnează o propoziție„
{Name}, rata dvs. lunară este $ {monthRate} ”
Dacă numele tău este `Oscar` hypothCalculator () ar trebui să
 returneze„ Oscar, rata ta lunară este de 1073,64 ”*/





// 🏡 Task 4: Argumente and Parametri
/* Înlocuiți variabilele din funcțiile dvs.
 cu parametri, astfel încât să puteți înlocui
 „P“, „I” și „N” când apelați funcția.
De exemplu,
mortgageCalculator (200000, 0,05, 30); <-
ar trebui să returneze 1.073,64*/





// 🏡 Task 5: Conditionals
/* Adăugați un alt parametru la funcția dvs. numit scor de credit.
 Acest parametru va fi un număr între 0 și 800 (un scor de credit).
Apoi, adăugați fluxul de control în cadrul funcției dvs. astfel
 încât daca creditScore este peste 740, rata dobânzii scade
 cu 0,5%, dacă scorul de credit este sub 660, rata dobânzii
  crește cu 0,5% și dacă scorul de credit este între 660 și 740
   rata dobânzii nu se schimbă.
Sugestie: pentru a scădea o rată a dobânzii cu 5%,
 puteți lua o rată lunară și o puteți multiplica cu 0,95.
  În mod similar, pentru a crește rata dobânzii cu 5%, ați face o
   rată lunară * 1,05.*/




// 🏡 Task 6: Loops
/* Scrieți o nouă funcție numită variableInterestRate.
Această funcție ar trebui să fie aceeași ca mortgageCalculator,
 cu excepția cazului în care ar trebui să scoata in console.log
  plata lunară pentru 10 rate ale dobânzii diferite la 0,5%,
  plus sau minus 2% din rata dobânzii introduse.
  Completați aceste calcule folosind un ciclu for.
De exemplu, variableInterestRate (200000, 0,04, 30) ar trebui să
scoata in consola:
„{Name}, cu o rată a dobânzii de 0,02, rata lunară este de 739 USD”
„{Name}, cu o rată a dobânzii de 0,025, rata lunară este de 790 USD”
„{Name}, cu o rată a dobânzii de 0,03, rata lunară este de 843 USD”
„{Name}, cu o rată a dobânzii de 0,035, rata lunară este de 898 USD”
„{Name}, cu o rată a dobânzii de 0,04, rata lunară este de 955 USD”
„{Name}, cu o rată a dobânzii de 0,045, rata lunară este de 1013 USD”
„{Name}, cu o rată a dobânzii de 0,05, rata lunară este de 1074 USD”
„{Name}, cu o rată a dobânzii de 0,055, rata lunară este de 1136 USD”
„{Name}, cu o rată a dobânzii de 0,06, rata lunară este de 1199 USD”*/


