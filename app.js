// import functions and grab DOM elements
import { guessingGame } from './utilty.js';


const refreshButton = document.getElementById('refresh-button');
const submitButton = document.getElementById('submit-button');


// set event listeners to update state and DOM
submitButton.addEventListener('click', guessingGame ); 

refreshButton.addEventListener('click', () => {
    document.location.reload();
})
