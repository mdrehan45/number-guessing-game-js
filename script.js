let random=parseInt(Math.random()*100+1);

const submit=document.querySelector('#btn')
const inputbox=document.querySelector('#inputbox')
const pg=document.querySelector('#pg')
const remaining=document.querySelector('#remaining')
const lowandhi=document.querySelector('#lowandhi')
const startover=document.querySelector('#box')

const p=document.createElement('p')

let prevguess=[]
let numguess=1

let playgame= true


if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        let guess=parseInt(inputbox.value)
        validateguess(guess)
    })
}

function validateguess(guess){
   if(isNaN(guess)){
    alert("please enter valid number")
   }
   else if(guess<1){
    alert("please enter a number more than 1")
   }
   else if (guess>100){
    alert("please enter a number less than 100")
   }
   else{
    prevguess.push(guess)
    if(numguess===11){
        displayguess(guess)
        displaymsg(`Game over.Random number was ${random}`)
        endgame()
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
   }
}

function checkguess(guess){
    if(guess===random){
        displaymsg(`you guessed it right`)
        endgame()
    }
    else if(guess<random){
        displaymsg(`number is Too low`)
    }
    else if(guess>random){
        displaymsg(`number is Too high`)
    }
}
function displayguess(guess){
inputbox.value = ` `;
pg.innerHTML+=` ${guess}  `
numguess++;
remaining.innerHTML=`Remaining : ${11-numguess}`
}

function displaymsg(msg){
lowandhi.innerHTML=`<h2> ${msg} </h2>`
}
function endgame(){
inputbox.value=` `;
inputbox.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame"> Start new game</h2>`;
startover.appendChild(p)
playgame=false
newgame();
}
function newgame(){
const newgamebtn= document.querySelector('#newgame')
newgamebtn.addEventListener("click",function(e){
    random=parseInt(Math.random()*100+1);
    prevguess=[]
    numguess=1
    pg.innerHTML='prevoius guess:  '
    remaining.innerHTML=`Remaining : ${11-numguess}`
    inputbox.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true
})
}
