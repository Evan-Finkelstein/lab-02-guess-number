// import functions and grab DOM elements
const input = document.getElementById('input');
const results = document.getElementById('result-span');
const guesses = document.getElementById('guesses-span');
const refreshButton = document.getElementById('refresh-button');
const submitButton = document.getElementById('submit-button');

// initialize state
const myNumber = Math.floor((Math.random() * 20)+1)
console.log(myNumber)
let guessesLeft = 4

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
if (input.valueAsNumber === myNumber){
    results.textContent = 'You Guessed it';
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
    refreshButton.classList.toggle('hidden')
    submitButton.classList.toggle('hidden')
}
})
refreshButton.addEventListener('click', () => {
    document.location.reload()
})
