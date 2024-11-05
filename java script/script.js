let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let count=0;
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    count++;
    console.log(count);
if(turnO){//player O
    box.innerText= "O";
    box.classList.add("O");
    turnO=false;
}
else{//player X
    box.innerText="X";
    box.classList.add("X");
    turnO=true;
}
box.disabled=true;

checkWinner();

});

});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msgContainer.classList.remove("hide");
    if(winner!=drawCase){
        msg.innerText=`Congratulations! winner is ${winner}`;
    }
else{
    msg.innerText="It's a Draw";
}

    disableBoxes();
}
let drawCase="none"
const checkWinner=()=>{
for(let pattern of winPatterns){
   let pos1Val=boxes[pattern[0]].innerText;
   let pos2Val= boxes[pattern[1]].innerText;
   let pos3Val= boxes[pattern[2]].innerText;

   if(pos1Val!="" && pos2Val!= "" && pos3Val != ""){
if(count===9){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        
        console.log("winner",pos1Val);
        showWinner(pos1Val);
    }
    else{
        console.log("winner",drawCase);
        showWinner(drawCase);
    }
} 
else{
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        
        console.log("winner",pos1Val);
        showWinner(pos1Val);
    }
}  
    }
   }
};


newBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);