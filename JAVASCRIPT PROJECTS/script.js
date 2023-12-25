let boxs=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resent-btn");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;

const winningpnr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];



const resetgame= ()=>{
    turn0=true;
    boxesenabled();
    msgcontainer.classList.add("hide");
}
boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });


});

function boxesdisabled(){
    for (let box of boxs){
        box.disabled=true;

    }
    
}

function boxesenabled(){
    for (let box of boxs){
        box.disabled=false;
        box.innerText="";

    };
    
};

const showwinner=(winner)=>{
    msg.innerText=`congratulation ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxesdisabled();

}


const checkwinner=()=>{
    for(let pattern of winningpnr){
        let pos1val=boxs[pattern[0]].innerText;
        let pos2val=boxs[pattern[1]].innerText;
        let pos3val=boxs[pattern[2]].innerText;

        if (pos1val !="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val)
                showwinner(pos1val);
            }
        }
    }

}

newgame.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);