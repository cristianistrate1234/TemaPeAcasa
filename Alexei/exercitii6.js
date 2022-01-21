// Un centru comunitar local organizează o strângere de
// fonduri de 5k pentru distracție și a invitat 50 de
// întreprinderi mici să facă o mică donație în numele lor
// pentru câteva actualizări ale instalațiilor lor. Fiecare
// companie a desemnat un reprezentant pentru a participa la
// eveniment, împreună cu o mică donație.

// Da-ti scroll până în partea de jos a listei pentru a utiliza
// câteva metode avansate de array pentru a ajuta directorul
// evenimentului să adune câteva informații de la companii
const runners = [
    { id: 1, first_name: "Charmain", last_name: "Seiler", email: "cseiler0@wired.com", shirt_size: "2XL", company_name: "Divanoodle", donation: 75 },
    { id: 2, first_name: "Whitaker", last_name: "Ierland", email: "wierland1@angelfire.com", shirt_size: "2XL", company_name: "Wordtune", donation: 148 },
    { id: 3, first_name: "Julieta", last_name: "McCloid", email: "jmccloid2@yahoo.com", shirt_size: "S", company_name: "Riffpedia", donation: 171 },
    { id: 4, first_name: "Martynne", last_name: "Paye", email: "mpaye3@sciencedaily.com", shirt_size: "XL", company_name: "Wordware", donation: 288 },
    { id: 5, first_name: "Gussy", last_name: "Raraty", email: "graraty4@ucoz.ru", shirt_size: "L", company_name: "Oozz", donation: 291 },
    { id: 6, first_name: "Yule", last_name: "Tommasetti", email: "ytommasetti5@state.gov", shirt_size: "S", company_name: "Yodo", donation: 27 },
    { id: 7, first_name: "Kathie", last_name: "Majury", email: "kmajury6@guardian.co.uk", shirt_size: "3XL", company_name: "Zoomcast", donation: 261 },
    { id: 8, first_name: "Tanner", last_name: "Branton", email: "tbranton7@tmall.com", shirt_size: "2XL", company_name: "Realmix", donation: 28 },
    { id: 9, first_name: "Sarina", last_name: "Lasham", email: "slasham8@toplist.cz", shirt_size: "XL", company_name: "Gigashots", donation: 110 },
    { id: 10, first_name: "Bertie", last_name: "Lonergan", email: "blonergan9@issuu.com", shirt_size: "3XL", company_name: "Skinte", donation: 62 },
    { id: 11, first_name: "Trevor", last_name: "Studd", email: "tstudda@networkadvertising.org", shirt_size: "S", company_name: "Cogidoo", donation: 76 },
    { id: 12, first_name: "Malachi", last_name: "Okeshott", email: "mokeshottb@chron.com", shirt_size: "M", company_name: "DabZ", donation: 91 },
    { id: 13, first_name: "Berget", last_name: "Logsdail", email: "blogsdailc@wix.com", shirt_size: "M", company_name: "Mymm", donation: 9 },
    { id: 14, first_name: "Loise", last_name: "Rivlin", email: "lrivlind@behance.net", shirt_size: "2XL", company_name: "Linktype", donation: 204 },
    { id: 15, first_name: "Christan", last_name: "Kendall", email: "ckendalle@example.com", shirt_size: "XS", company_name: "Skinix", donation: 252 },
    { id: 16, first_name: "Kayla", last_name: "Whitwam", email: "kwhitwamf@deliciousdays.com", shirt_size: "2XL", company_name: "Oyope", donation: 147 },
    { id: 17, first_name: "Heddie", last_name: "Heningam", email: "hheningamg@tripadvisor.com", shirt_size: "L", company_name: "Skinix", donation: 172 },
    { id: 18, first_name: "Mace", last_name: "Ballinger", email: "mballingerh@a8.net", shirt_size: "S", company_name: "Nlounge", donation: 266 },
    { id: 19, first_name: "Nola", last_name: "Abberley", email: "nabberleyi@jalbum.net", shirt_size: "XL", company_name: "Photospace", donation: 148 },
    { id: 20, first_name: "Nadine", last_name: "Tresler", email: "ntreslerj@marketwatch.com", shirt_size: "3XL", company_name: "Wikido", donation: 292 },
    { id: 21, first_name: "Ulrikaumeko", last_name: "Vuittet", email: "uvuittetk@gov.uk", shirt_size: "S", company_name: "Skinte", donation: 102 },
    { id: 22, first_name: "Saunder", last_name: "Spennock", email: "sspennockl@icq.com", shirt_size: "3XL", company_name: "Kwimbee", donation: 213 },
    { id: 23, first_name: "Carmel", last_name: "Woffinden", email: "cwoffindenm@wikispaces.com", shirt_size: "S", company_name: "Rooxo", donation: 137 },
    { id: 24, first_name: "Marielle", last_name: "Kimmel", email: "mkimmeln@jimdo.com", shirt_size: "M", company_name: "Livetube", donation: 96 },
    { id: 25, first_name: "Brucie", last_name: "Burris", email: "bburriso@slate.com", shirt_size: "2XL", company_name: "Wordtune", donation: 128 },
    { id: 26, first_name: "Juan", last_name: "Berzon", email: "jberzonp@soup.io", shirt_size: "3XL", company_name: "Einti", donation: 234 },
    { id: 27, first_name: "Sacha", last_name: "Olsen", email: "solsenq@reverbnation.com", shirt_size: "2XL", company_name: "Viva", donation: 190 },
    { id: 28, first_name: "Jamey", last_name: "O'Nolan", email: "jonolanr@samsung.com", shirt_size: "XL", company_name: "Skinix", donation: 31 },
    { id: 29, first_name: "Morrie", last_name: "Rainard", email: "mrainards@yale.edu", shirt_size: "XS", company_name: "Podcat", donation: 52 },
    { id: 30, first_name: "Fidel", last_name: "Roskelly", email: "froskellyt@ibm.com", shirt_size: "XS", company_name: "Avavee", donation: 5 },
    { id: 31, first_name: "Toni", last_name: "MacSweeney", email: "tmacsweeneyu@parallels.com", shirt_size: "M", company_name: "Jaloo", donation: 82 },
    { id: 32, first_name: "Jessey", last_name: "Walhedd", email: "jwalheddv@slashdot.org", shirt_size: "L", company_name: "Trilia", donation: 5 },
    { id: 33, first_name: "Karola", last_name: "Piper", email: "kpiperw@ucsd.edu", shirt_size: "3XL", company_name: "Yombu", donation: 110 },
    { id: 34, first_name: "Marley", last_name: "Mitchenson", email: "mmitchensonx@webeden.co.uk", shirt_size: "M", company_name: "Zoonoodle", donation: 97 },
    { id: 35, first_name: "Marrilee", last_name: "Thrasher", email: "mthrashery@opensource.org", shirt_size: "XL", company_name: "Bluejam", donation: 17 },
    { id: 36, first_name: "Tye", last_name: "Manie", email: "tmaniez@netscape.com", shirt_size: "L", company_name: "Kanoodle", donation: 30 },
    { id: 37, first_name: "Charleen", last_name: "Sheering", email: "csheering10@mit.edu", shirt_size: "3XL", company_name: "Jatri", donation: 262 },
    { id: 38, first_name: "Valma", last_name: "Eynaud", email: "veynaud11@archive.org", shirt_size: "XS", company_name: "Jaxbean", donation: 212 },
    { id: 39, first_name: "Dollie", last_name: "McDarmid", email: "dmcdarmid12@tinyurl.com", shirt_size: "S", company_name: "Kayveo", donation: 74 },
    { id: 40, first_name: "Minna", last_name: "Hymas", email: "mhymas13@cornell.edu", shirt_size: "XS", company_name: "Vimbo", donation: 101 },
    { id: 41, first_name: "Jsandye", last_name: "Frend", email: "jfrend14@ca.gov", shirt_size: "XS", company_name: "Latz", donation: 156 },
    { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
    { id: 43, first_name: "Hank", last_name: "Zebedee", email: "hzebedee16@ezinearticles.com", shirt_size: "L", company_name: "Gigashots", donation: 241 },
    { id: 44, first_name: "Jodie", last_name: "Stawell", email: "jstawell17@yale.edu", shirt_size: "S", company_name: "Jaxspan", donation: 262 },
    { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
    { id: 46, first_name: "Reginauld", last_name: "Purselowe", email: "rpurselowe19@thetimes.co.uk", shirt_size: "L", company_name: "Jabbersphere", donation: 11 },
    { id: 47, first_name: "Vida", last_name: "Tydd", email: "vtydd1a@dropbox.com", shirt_size: "S", company_name: "Quaxo", donation: 55 },
    { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
    { id: 49, first_name: "Bel", last_name: "Alway", email: "balway1c@ow.ly", shirt_size: "S", company_name: "Voolia", donation: 107 },
    { id: 50, first_name: "Shell", last_name: "Baine", email: "sbaine1d@intel.com", shirt_size: "M", company_name: "Gabtype", donation: 171 },
];

// ==== Challenge 1: Use .forEach() ====
// Directorul evenimentului are nevoie atât de numele
// și de prenumele fiecăruia
// alergător pentru salopetele de alergat. Combinați atât primul,
// cât și ultimul
// numește și completează o nouă array numită `fullNames`.
// Aceast array va conține doar string-uri.
// let fullNames = [];
const names = (object) => {
    return  object.map(index => index.first_name+" "+index.last_name)

}
// console.log(names(runners));
// ==== Challenge 2: Use .map() ====
// Directorul evenimentului trebuie să aibă toate prenumele alergătorilor
// // cu majuscule.
// // adaugati intr-un array numit `firstNamesAllCaps`.
// // Aceast array va conține doar stringuri.
// let firstNamesAllCaps = [];

const firstNamesAllCaps =(object) => {
    return object.map(index => index.first_name.toUpperCase())
}
// console.log(firstNamesAllCaps(runners));

// ==== Challenge 3: Use .filter() ====
// Cămășile mari nu vor fi disponibile pentru
// eveniment din cauza unei probleme de comandă.
// Avem nevoie de o versiune filtrată a gamei de
// alergători, care să conțină doar acei
// alergători cu cămăși de dimensiuni mari,
// astfel încât să poată alege o dimensiune
// diferită. Aceasta va fi o serie de obiecte.
// let runnersLargeSizeShirt = [];

const runnersLargeSizeShirt= (object) => {
  return object.filter(index => index.shirt_size === "3XL")
}
// console.log(runnersLargeSizeShirt(runners));

// ==== Challenge 4: Use .reduce() ====
// Donațiile trebuie contabilizate și raportate
// în scopuri fiscale. Adăugați toate donațiile
// și salvați totalul într-o variabilă
// ticketPriceTotal.
let ticketPriceTotal = 0;
const fiscale = runners.reduce(function (index,item){
    return index + item.donation
},ticketPriceTotal)


console.log("Suma Donatiilor: " +fiscale);

// ==== Challenge 5: Be Creative ====
// Acum că ați folosit .forEach (), .map (),
// .filter () și .reduce (). Vreau să vă gândiți
// la potențialele probleme pe care le-ați putea
// rezolva, având în vedere setul de date și
// tema . Încercați să creați și apoi
// să rezolvați 3 probleme unice folosind una
// sau mai multe dintre metodele array-ului
// enumerate mai sus.

// Problema 1
//Cautam in lista de donatii cea mai mare donatie
const maxdonation = runners.reduce((max,object)=> {
    return object.donation > max.donation ? object : max;
})
// console.log(maxdonation);

// Problema 2
//Cauta persoanele care au ace easi suma de donati
const donateEqually= (object) => {
    return object.filter(index => index.donation === 5)
}
// console.log(donateEqually(runners));

// Problema 3
//Scoate Persoanele care fac porte din tro companie
const companyEmployees= (object) => {
    return object.filter(index => index.company_name === "Skinix")
}
// console.log(companyEmployees(runners));