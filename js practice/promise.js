//before this Q and BlueBird libraries were used . now node js directly provide the support
const promise = new Promise(function(resolve, reject){
    //Do an async task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promise.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('resolved');
})

const promiseThree  = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "Radha" , email : "radha@example.com" })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  =  true;
        if(!error){
            resolve({username : "radha", password: "123"});
        }
        else{
            reject('ERROR : Soemthing went wrong');
        }
    },1000)
})
promiseFour
.then((user) =>{
    console.log(user);
    return user,username;
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  =  false;
        if(!error){
            resolve({username : "radha", password: "123"});
        }
        else{
            reject('ERROR : Soemthing went wrong');
        }
    },1000)
})
async function consumePromiseFive(){
    const response = await PromiseFive;
    console.log(response);
}
consumePromiseFive();