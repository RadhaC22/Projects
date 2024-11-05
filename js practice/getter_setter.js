class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}radha`
    }

    set password(vslue){
        thiss._password = vslue
    }
}
const hitesh = new User("h@hitesh.ai","abc");
console.log(hitesh.password);
