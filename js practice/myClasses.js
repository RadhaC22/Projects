//ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
}

// const chai = new User("chai", "chai@google.com","123");
// console.log(chai.encryptPassword());


//INHERITANCE
class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`); 
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`a new course was added ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@google.com","123");
chai.addCourse();
//if static keyword is used in front of any method then an object cannot access it neither a child can inherit it  