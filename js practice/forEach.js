//this gave the value as undefined as forEach doesnot return any values
// let coding = ["java","cpp","python","ruby","js"];

// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return;
// })
// console.log(values);

// thus for returning the values filter function is used
 let nums = [1,2,3,4,5,6,7,8];
// const newNums = nums.filter( (num) => num>4);
// console.log(newNums);

// const newNum = nums.map( (num) => num+10);
// console.log(newNum);

//in chaining the value of the first method is passed to the second 
const newNums= nums
               .map( (num) => num*10)
               .map( (num) => num+1)
               .filter( (num) => num>=40);//filter is for conditions only
console.log(newNums);