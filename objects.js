// //declare two ways 1.literal and 2.constructor

// //singleton-->using constructor and by literals  Object.create

// //obj literal
// const mySym=Symbol("key1")

// const user={
//     name:"bhoj",
//     "full name":"bhoj jamre",
//     id:1232,
//     age:22,
//     [mySym]:"mykey1",  //on keeping [] ist type will be symblo else object
//     loc:"jaipur",
//     isLogin:false,
//     lastLogin:["mdy","sat"]
// }
// //accessing using dot(.) operator and [] notation
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["mySym"]);

// //overrride

// user.age=45
// console.log(user.age);
// // Object.freeze(user)
// id=1323
// console.log(user);

// user.greet= function(){
//     console.log(`hello user, ${this.name}`);
// }
// console.log(user.greet()); //while refereing method gives undefined
// console.log(user.greet);//reference of method 

 
//let tinderUser=new Object()  //singleton

let tinderUser={} //non singleton obj
tinderUser.id="123abc"
tinderUser.name="Rajiv"
tinderUser.isLogin=false;

// console.log(tinderUser);

const regUser={
    email:"rajiv@gmail.com",
    fullname:{
        fname:"rajiv",
        lname:"chopra"
    },
    id:12345
}
// console.log(regUser);
// console.log(regUser.fullname.lname);

let obj1 = { 1:"a", 2:"b"};
let obj2 = { 3:"c", 4:"d"};
// obj3={obj1,obj2}

// obj3=Object.assign({},obj1,obj2) //{} is given as parameter to a target and remaining are sources....{obj1,obj2} is also correct the result will be stored in obj1

obj3={...obj1,...obj2}// spread operator
// console.log(obj3);

// console.log(Object.keys(regUser));  // in array form can be access as array
// console.log(Object.values(regUser));
// console.log(Object.entries(regUser));

//destructuring of objects

const course={
    cname:"js",
    price:999,
    instructor:"hitesh"
}
//printing course.instructor and soo on....

//other method

const {/*price*/ instructor:intstr}=course
console.log(intstr);

// apis will be given in object form and array
/*jason  objects without name
{
    keys:values
    ....
} */

//if api is given in array form instead of objects then try using loop and enjoy as below
/*[
    {},
    {}....
] */

