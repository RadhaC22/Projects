const PromiseFive = new Promise(function(resolve,reject){
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
async function consumePromiseFive(){
try {
    const response = await PromiseFive;
    console.log(response);
} catch (error) {
 console.log(error);   
}
}
consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("E:", error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));
// if you get a response as 404 then its neither the resolve nor the reject its just the response