let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    
    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        restartButton.style.display = 'block';
        submitGuess.disabled = true;
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }

    guessInput.value = '';
    guessInput.focus();
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    result.textContent = '';
    guessInput.value = '';
    guessInput.focus();
    restartButton.style.display = 'none';
    submitGuess.disabled = false;
});
