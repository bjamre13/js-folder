//arrays

//arrays are resizable


const heros=["marvel","dc"]

const arr1 =new Array(1,2,23,445);
console.log(arr1);

// array methods
arr1.push(-45)
console.log(arr1);

arr1.pop() // removes last method
console.log(arr1);

arr1.unshift(9);
console.log(arr1); //insert at strting

// arr1.shift();
// console.log(arr1); //removes first elem

console.log(arr1.includes(9)); //elem constins or not
console.log(arr1.indexOf(9));

let arr=arr1.join();//binds and converts into string

console.log(arr1);

console.log(typeof arr);

slice, splice

console.log(arr1.slice(1,3));
console.log(arr1);

console.log(arr1.splice(1,3)); // changes the original array itself
console.log(arr1);


let mar_heros=["iron","thor","capAmr"]
let dc_heros=["super","flash","batman"]

mar_heros.push(dc_heros)
console.log(mar_heros[3][1]);

let newAll=mar_heros.concat(dc_heros)
console.log(newAll);

const allHeros=[...mar_heros,...dc_heros] //spread operator
console.log(allHeros);

const anArray=[1,3,[53,90,987],[764],[7,4,1]]
const realArray=anArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray([])) //true

console.log(Array.from("bhojeshwar")); //convert into array
console.log(Array.from({name:"bhojeshwar"})); //empty array

let scr1=100
let scr2=200
let scr3=300
console.log(Array.of(scr1,scr2,scr3));