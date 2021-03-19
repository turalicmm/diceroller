'use strict';

//Selecting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El= document.querySelector('#score--0');
const score1El= document.querySelector('#score--1');
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const activePlayer1=document.querySelector('.player--active')
let diceEl= document.querySelector('.dice');

let scores,currentScore,activePlayer,playing;

//Starting contidions
const init=function(){
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

     currentScore=0;
     activePlayer=0;
     scores=[0,0];
     playing=true;
    
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
}; 
init()

const switchPlayer=function(){
    document.getElementById(
        `current--${activePlayer}`
        ).textContent=0;
    activePlayer= activePlayer===0?1:0;
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active')
}

//Rolling the dice
btnRoll.addEventListener('click', function(){
    if(playing){
        //Generating random dice
        let random=Math.trunc(Math.random()*6)+1;
        //Displaying it
        diceEl.classList.remove('hidden')
        diceEl.src=`img/dice-${random}.png`
        console.log(random);
        //If rolled 1, switch to next player
        if(random !==1){
            //add dice value to current score
                currentScore=currentScore+random //+=dice
                document.getElementById(
                    `current--${activePlayer}`
                    ).textContent=currentScore;
        } else{
            //switch to next player
            switchPlayer()
        }
            }
})

btnHold.addEventListener('click', function(){
    //Add current score to active player
    if(playing){
        scores[activePlayer]+=currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    
    //Check if score>=100
    if(scores[activePlayer]>=100){    
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        playing=false
    }
    diceEl.classList.add('hidden')

    //switch to next player
    switchPlayer();
    }
})

btnNew.addEventListener('click',function(){
    init(   )
})