const results = document.getElementById('result-span');
const guesses = document.getElementById('guesses-span');
const refreshButton = document.getElementById('refresh-button');
const submitButton = document.getElementById('submit-button');

const input = document.getElementById('input');
const myNumber = Math.floor((Math.random() * 20)+1)
let guessesLeft = 4

console.log(myNumber);


export function guessingGame(){
    
    if (input.valueAsNumber === myNumber){
        results.textContent = 'You guessed it Nostradamus';
        refreshButton.classList.toggle('hidden');
        refreshButton.textContent = 'Bet you can\'t guess it again'
        submitButton.classList.toggle('hidden');
    }  
    if (input.valueAsNumber < myNumber){
        guessesLeft--;
        results.textContent = 'Your number is too low';
        guesses.textContent = guessesLeft;
    
    } 
    if (input.valueAsNumber > myNumber){
        guessesLeft--;
        results.textContent = 'Your number is too high';
        guesses.textContent = guessesLeft;
    }
    if (guessesLeft === 0){
        results.textContent = 'You lose loser. Sucks to suck.';
        refreshButton.classList.toggle('hidden');
        submitButton.classList.toggle('hidden');
    }
    }
    
    