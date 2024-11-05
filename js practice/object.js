function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power =2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//there are some by default context set the parenthesis are the representatin that methods
//function is a fucntion but its an object also

function createUser(username,score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai",25);
const tea =new createUser("tea",250);

chai.printMe();
tea.printMe();
/*
Here's what happens behind the scenes when the new keyword
is used:

Anew obbject is created: The new keyword initiates the 
creation of a new JavaScript object.

A prototype is linkd: The newly created object gets linked 
to the prototype property if the constructor fucntion. This
means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called: The constructor function is 
called with the specified arguments and this is bound to
the newly created object. If no explicit return value is
specified from the constructor.JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function
has been called, if it doesn't return a non-primitive value
(object,array,funcitn,etc.), the newly created object
is returned. */


//in a prototype is object is given the power by default its child have that power but vice-cersa is not possible
let myHeros = ["hulk","spidy"];
Object.prototype.radha=function(){
    console.log(`radha is given power`);
}
Array.prototype.radhe=function(){
    console.log(`radha say hi`);
}
myHeros.radha();
myHeros.radhe();
// Object.radhe();


//INHERITANCE
const User ={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
isAvailable:false
}
const TASupport = {
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherusername = "chai aur code       "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherusername.truelength();
"radha         ".truelength();