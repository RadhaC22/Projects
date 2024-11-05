var newPara = document.createElement("p");
var content = document.createTextNode("This is a new paragraph.");
newPara.appendChild(content);
var divElem = document.getElementById("theDiv");
divElem.appendChild(newPara);
function remv(element) {
element.parentNode.removeChild(element);
}
var b = document.getElementById("first");
b.addEventListener("click",()=>{
    remv(document.getElementById("two"));
});

let person= prompt("please enter your name","harry");
let text;
if(person == null || person == ""){
    text = "user cancelled the prompt";
}
else{
    text = "hello" + person + "!how are you today";
}

document.write(text);