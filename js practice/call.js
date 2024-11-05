function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUsername(username, email, password){
    setUsername.call(this, username);//when it is called then the this vanishes and doesnot return anything so here its own this is passed for stroing the cureent value returned
    this.email = email;
    this.password = password;
}

const chai = new createUsername("chai", "chai@google.com", "123");
console.log(chai);
//call passes the current execution context to another function