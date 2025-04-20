// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all buttons or elements with class 'choice'
const choices = document.querySelectorAll(".choice");

// Select the message display area
const msg = document.querySelector("#msg");

// Select the paragraph elements that display scores
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // valid choices
    const randIdx = Math.floor(Math.random() * 3); // get a random index (0, 1, or 2)
    return options[randIdx]; // return a random choice
};

// Function that handles the case when it's a draw
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31"; // blueish background
};

// Function that displays the result and updates scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // increase user score
        userScorePara.innerText = userScore; // update UI
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // increase computer score
        compScorePara.innerText = compScore; // update UI
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

// Main function that runs when the user makes a choice
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    // Generate computer's choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    // If both choices are same, it's a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Determine if the user wins
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }

        // Show the result
        showWinner(userWin, userChoice, compChoice);
    }
};

// Attach event listeners to all choice buttons
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get the id (rock, paper, or scissors) from the clicked element
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); // Start the game
    });
});
