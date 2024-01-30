let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false)
    {
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function() {
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomIndex=Math.floor(Math.random()*3);
    let randColor=btns[randomIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randomIndex);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);


    gameflash(randBtn);
}
function checkAns(index)
{
    // console.log("curr level: ",level);
    // let index=level-1;
    if(userSeq[index]==gameSeq[index])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your Score Was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="#ffaa00";

        }, 230);
        reset();
    }
}
function btnPress(){
    console.log("this");
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
