document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("number");
  const guessButton = document.getElementById("guessBtn");
  const resetButton = document.getElementById("resetBtn");
  const message = document.getElementById("text");

  let randomNumber = Math.floor(Math.random() * 50) + 1;
  let attempts = 0;
  const maxAttempts = 5;

  guessButton.addEventListener("click", function () {
    const userGuess = parseInt(input.value);
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 50) {
      message.textContent = "Please enter a number between 1 to 50!";
    } else if (userGuess === randomNumber) {
      message.textContent = `Congratulations! You've guessed the number in ${attempts} attempts!`;
      guessButton.disabled = "true";
    } else if (attempts >= maxAttempts) {
      message.textContent = `Game Over! You've used all ${maxAttempts} attempts. The Number was ${randomNumber}.`;
      guessButton.disabled = "true";
    } else if (userGuess < randomNumber) {
      message.textContent = `My Number is greater than ${userGuess}. Attempts Remaining: ${
        maxAttempts - attempts
      }`;
    } else if (userGuess > randomNumber) {
      message.textContent = `My Number is lesser than ${userGuess}. Attempts Remaining: ${
        maxAttempts - attempts
      }`;
    }
  });

  resetButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 0;
    input.value = "";
    message.textContent = "Enter The Number !!!";
    guessButton.disabled = false;
  });
});
