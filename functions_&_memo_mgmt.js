//functions

// function myFun(para1,para2...){
    //syntax
// }
//myfun(arg1,arg2...) execute

function addNUms(num1,num2){
    console.log(num1+num2);
}
// const res=addNUms(3,4)
// console.log(res); //gives undefined as fun not returning any value

function loginUser(userName ="sam"){ //default value
    if(userName===undefined){ // if(!username){
        console.log("enter user name");
        return
    }
    return `${userName} jst loggedin`
}
// console.log(loginUser("varun")); //if not value is pased then returned value is "undefined"

//shopping cards including many args
//usinf rest operator(...)
function calculate(val1,val2,...num1){
    return num1
}
// console.log(calculate(100,200,559,600));

const user={
    uname:"bhojesh",
    price:99
}
function handleObj(anyobject){
    console.log(`uname is ${anyobject.uname} and price ${anyobject.price}`);
}
// handleObj(user)

//or other type of passing
// handleObj({
//     uname:"bhojesh",
//     price:99
// })

const arr=[100,200,546]

function newArray(getarray){
    return getarray[1]
}
// console.log(newArray(arr))

//let , const --> block scope
//var--> global scope

//hoisting accesing the fun in diff manner