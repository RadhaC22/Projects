let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const resetButton=document.querySelector(".new-button");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
const gameOver=document.querySelector("#game");
const genComputerChoice =()=>{
const option=["rock","paper","scissors"];
const randInx=Math.floor(Math.random()*3);
return option[randInx];
};

const resetGame=()=>{
    userScore=0;
    compScore=0;
};
const drawGame=()=>{
console.log("game was draw");
msg.innerText="Game was draw";
msg.style.backgroundColor=" #081b31";
};

resetButton.addEventListener("click",resetGame);
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    if(userScore!=5){
        userScore++;
    }
    else{
        gameOver.classList.remove("hide");
        choices.forEach((choice)=>{
            choice.disabled=true;
        });
    }
    userScorePara.innerText=userScore;
    console.log("you win");
    msg.innerText=`You win Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    if(compScore!=5){
        compScore++;
    }
    else{
        gameOver.classList.remove("hide");

        choices.forEach((choice)=>{
            choice.disabled=true;
        });
    }
    compScorePara.innerText=compScore;
console.log("you lose");
msg.innerText=`You lose! ${userChoice} beats your ${compChoice}`;
msg.style.backgroundColor="red";
}
};

const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
const compChoice=genComputerChoice();
console.log("computer choice =",compChoice);

if(userChoice==compChoice){
    drawGame();
}
else{
let userWin=true;
if(userChoice=== "rock"){
    //scissors or paper
    userWin= compChoice==="paper"? false:true;
}
else if(userChoice==="paper"){
// scissors or rock
userWin= compChoice==="scissors"? false: true;
}
else{
    //rock or paper
    userWin= compChoice==="rock"? false:true;
}
showWinner(userWin,userChoice,compChoice);
}

};


choices.forEach((element)=>{
element.addEventListener("click",()=>{
const userChoice=element.getAttribute("id");
playGame(userChoice);
});
});

