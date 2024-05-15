

let arr=[1,2,3,4,5];

for (const idx of arr) {
    // console.log(idx);
}

let greet="hello world"

for (const str of greet) {
    // console.log(str);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('ENG',"Englsnd")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-->',value);
}

// const obj={
//     'gm1':'candy crush',
//     'gm2':'ps5'
// }
// for (const i of obj) { //not used on objects 
//     console.log(i);
// }

//forin loop--> print keys of arrays or  objects
//for map not used as maps are not iteratorable
const obj1={
    'gm1':'candy crush',
    'gm2':'ps5'
}
for (const key in obj1) {
    // console.log(key,',',obj1[key]);
}

//foreach loop

const coding =["js",'ruby','java','php']
coding.forEach(function(val) {
    // console.log(val);
});

//using arrow fun
coding.forEach((val)=> {
    // console.log(val);
});


function printme(item){
    // console.log(item);
}

// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

//iteration on array of objects

const num=[
    {
        lng:'java',
        lngFile:'java'
    } ,  
    {
        lng:'javascript',
        lngFile:'js'
    } ,
    {
        lng:'python',
        lngFile:'py'
    } 
]

num.forEach((item)=>{
    console.log(item.lngFile); //item.lng-->for lang in given array
})

//for each doesnt return any value