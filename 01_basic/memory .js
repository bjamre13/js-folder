

//two types 
// Stack (primitive)
//--> copy or original value
//ex:
let helo="String";

let val2=helo;
console.log(val2);

//Heap(non primitive)
//--> reference of the value is given to all variables

let user1={
    email:"helo@gmail.com",
    id:123
}
let user2=user1;

user2.email="hii@gmail.com"

console.log(user1.email);