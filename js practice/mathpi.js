// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
const chai = {
    name : " ginger chai",
    price:250,
    isAvailable:true,
    ordernow : function(){
        console.log("chai ban gyi");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
   // writable:false,
    enumerable:false
})

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
}
