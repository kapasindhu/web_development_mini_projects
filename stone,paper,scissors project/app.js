let Userscore=0;
let Compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const Userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randId=Math.floor(Math.random()*3);
    return options[randId]; 

};


const DrawGame=()=>{
    msg.innerText="Game was Draw.Play again.";
    msg.style.backgroundColor = "#801b31";


};
const showWinner=(userWin,userchoice,compchoice) =>{
    if(userWin){
        Userscore++;
        Userscorepara.innerText=Userscore;
        msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor =  "green";


    }
    else{
        Compscore++;
        compscorepara.innerText=Compscore;
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }

}


const playGame =(UserChoice)=>{
    
    const compchoice=gencompchoice();
    
    if(UserChoice===compchoice){
        //draw game
        DrawGame();
    }else{
        let userWin=true;
        if(UserChoice ==="rock"){
            //scissors,paper
            userWin=compchoice ==="paper"? false : true;

        }else if(UserChoice ==="paper"){
            userWin=compchoice ==="scissors"? false : true;

        }
        else{
            userWin=compchoice ==="rock"? false : true;
        }
        showWinner(userWin,UserChoice,compchoice);



    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
        playGame(UserChoice);
    });
});