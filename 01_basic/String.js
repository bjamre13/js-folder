
//check all srting methods using inspect in browser
//and mdn for refeneces

let name="hello world"

const val=30

//use backticks called string interpolation
console.log(`my name is ${name} and my value is ${val}`);

let gameName=new String("pubg nmbjdcb jdjdfd");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('d')); // charAt(9)

let newStr=gameName.substring(0,5)
console.log(newStr); //last index not incuded

let anstr=gameName.slice(-5); //reverse substring
console.log(anstr);

let str1="   @bhoju   ";
console.log(str1);
console.log(str1.trim());// woks on white space and new line character

let url="https://www.youtube.com/watch?v=sscX432bMZo&t=4s"

console.log(url.replace('432','-'))

console.log(url.includes("bhoju"));

console.log(gameName.split(" "));