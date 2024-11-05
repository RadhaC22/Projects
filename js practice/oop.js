//Construction function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this// it is implicitly defined whether you write it or not 
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("radha", 11, false);// now here it overrides the above function is not a good practice at all to use the fucntin this way thus the new keyword is used
const userOne =new  User("hitesh", 12, true);
const userTwo = new User("radha", 11, false); 
console.log(userOne);
console.log(userTwo);