let gameSeq= [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let level = 0;
let gameStarted = false;


let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(gameStarted==false){
        console.log("game started");
        gameStarted =true

        levelUp();
    }
})

function levelUp(){
   userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
     

    let randomIdx = Math.floor(Math.random()*3);
    let randmColor = btns[randomIdx];
    let rdmBtn = document.querySelector(`.${randmColor}`)
    gameSeq.push(randmColor);
    btnFlash(rdmBtn);
}

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
} 

let allBtns = document.querySelectorAll(".container-btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress)
}

function btnPress(){
   let btn =this;
   btnFlash(btn);
   let userColor= btn.getAttribute("id");
   userSeq.push(userColor);  
  checkSeq(userSeq.length-1)

}

function checkSeq(idx){
  if(userSeq[idx]==gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000)
     }
  }
  else{
    h2.innerHTML = `Game Over Your Score was <b>${level}</b> <br> Press any key to restart`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function(){
      body.style.backgroundColor = "white";
    },150)
    restart();
  }
}
function restart(){
  gameStarted = false;
  gameSeq=[];
  userSeq = [];
  level = 0;
}
