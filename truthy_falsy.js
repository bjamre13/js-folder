const uemail="user@gmail.com"
//false values are--> false,0,-0,bigint 0n, "",null, undefined, NaN
// remaining are truthy value-->[],true,1,"0"(string value),"false"," ",{} ,funtion(){}
if(uemail){
    console.log("got uemail");
}
else{
    console.log("didn't get");
}

//Nullish coalesing operatr(??): null && undefined
// sometimes values are not provided functions are given from databases etc.....
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

//ternanry oper --> condition ? true : false