const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
// new is a constructer function ans Object.create is factory function there are more like this 

const tea = Object.create(User);
console.log(tea.email);
//es2022 private properties in this ususally instead of _ we use # this is the proposal u can furthur investigate bhy searching online for the proposal