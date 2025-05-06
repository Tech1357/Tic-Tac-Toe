let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let newbtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
//console.log(boxes);

let turnO=true;
let count=0;


const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled= true;
        count++;

        if (checkWinner()){
            return;
        };
        if (count==9 && !checkWinner()){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText="Game was a draw.";
    msgcontainer.classList.remove("msgcontainer");
    disableboxes();
};

const showWinner=(winner)=>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("msgcontainer");
};
const disableboxes=()=>{
    for (box of boxes){
        box.disabled=true;
    }
};
const checkWinner=()=>{
    for (let pattern of winPatterns){

    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if (pos1val===pos2val && pos2val===pos3val){
            console.log(pos1val,"wins");
            disableboxes();
            showWinner(pos1val);
            return true;
        }
    }
    };
};

const enableboxes=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msg.innerText="";
    msgcontainer.classList.add("msgcontainer");
};
reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);