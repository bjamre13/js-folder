//filter

let mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter((num)=>num>5)
// console.log(newnums);

// const newnums=mynums.filter((num)=>{
//     return num>5
// })
// console.log(newnums);

// const newnums=[]
// mynums.forEach((num)=>{
//     if(num>5) newnums.push(num)
// })
// console.log(newnums);

//map
// const newnums=mynums.map((num)=>{return num+10})


//chaining
newnums=mynums.
map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=50)
// console.log(newnums);

//reduce
const num2=[1,2,3,4,5]

// const total=num2.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curr:${curr}`);
//     return acc+curr
// },0+)

//using arrow fun
const total=num2.reduce((acc,curr)=>acc+curr,0)

console.log(total);

