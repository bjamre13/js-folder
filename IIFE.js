//immediately invoked fun expressions--> to remove the pollution created by global scope

(function chai(){ // named iife
    console.log("db connected");
})();

//()--> fun defination and ()-->execution, ; to end the funcs

((name)=>{ // unnmaed iife
    console.log(`db connected again by ${name}` );
})("bhoj");