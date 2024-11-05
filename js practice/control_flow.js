// understanding the concept of scope and the problems arised by using the var keyword
// const score = 200;
// if(score > 100){
//    var power  = "fly";
//     console.log(`power: ${power}`);
// }
// console.log(`power: ${power}`);

// if(score > 100){
//     let power  = "fly";
//     console.log(`power: ${power}`);
// }
// console.log(`power: ${power}`);

// implicit scope
let balance = 1000;
// if(balance > 500) console.log("bad practice"),
// console.log("another statement but this is not too readable code so donot use it");

let month = 3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;        
    case 3:
        console.log("march");
        break;        


    default:
        break;
}
// falsy value: false, 0 , -0 , null , undefined, BigInt 0n, "" , NaN
// truthy value: "0" , 'false', " " , [], {} , function(){} this is an empty function

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10

console.log(val1);
//terniary operator condition ? true : false