class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("name =",this.name);
        console.log("email=",email);
    }
}
let obj=new User("radha","radha@gmail.com")