const user={
    uname:"hitesh",
    price:999,

    message: function(){
        console.log(`${this.uname}, welcome`);
        console.log(this);
    }
}
// user.message()
// user.uname="sam"
// user.message()
// console.log(this);

// function fun(){
//     console.log(this);
// }

// fun()

//arrow fun

const chai=()=>{
    let username="sam"
    console.log(this.username);// undefined
}
// chai()

//Sysntax
const val=(num1,num2)=>{
    return num1+num2 //explicit 
}

//const val=(num1,num2)=>(num1+num2)......this is implicit

//objects are wrapped in parenthesis nd braces
//const val=(num1,num2)=>({uname:"johnny"})

console.log(val(2,3))
