// const accountId = 144553;
// let accountEmail = "radha@radha.com";
// var accouhtPassword = "12345";
// accountCity = "jaipur";

// // accountId = 2; not allowed
// accountEmail = "radha@rc.com";
// accouhtPassword = "12";
// accountCity = "delhi";
// console.log(accountId);
// console.table([accountId,accouhtPassword,accountEmail,accountCity]);

// let date = new Date();
// console.log(date.toLocaleString()); // 7/14/2024, 6:54:37 AM
// console.log(date.toISOString());//2024-07-14T01:24:09.000Z
// console.log(date.toDateString());//Sun Jul 14 2024
// console.log(date.toLocaleDateString());//7/14/2024

const mySym = Symbol("key");
const JsUser = {
    name:"radha",
    "full name":"radha chouhan",
    mySym:"mykey",
    email:"radha@key.com"
}
console.log(typeof(JsUser[mySym]));
console.log(JsUser);
