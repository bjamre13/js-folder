//dates

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myNewdate=new Date(2024,0,13,5,2); // monts starting from 0

console.log(myNewdate.toLocaleString());

let mydateVal=new Date("01-14-2024")
console.log(mydateVal.toLocaleDateString());

console.log(Date.now());//o/p in millisec timestamp

let newDte=new Date();
console.log(newDte.getHours());//use dot(.) operator to check all emthods

