let userScore = 0;
let compScore = 0;
let drawScore = 0;
let round = 1;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const drawScorePara = document.querySelector("#draw-score");
const compScorePara = document.querySelector("#comp-score");

const roundDisplay = document.querySelector("#round-display");

const msg = document.querySelector("#msg");

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    drawScore = 0;
    round = 1;
    roundDisplay.innerText = `Round: ${round}`
    userScorePara.innerText = userScore;
    drawScorePara.innerText = drawScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "rgb(129, 96, 176)";
});

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "rgb(129, 96, 176)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    const compChoice = genCompChoice();

    round++;
    roundDisplay.innerText = `Round: ${round}`;

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice)
    });
});

const rulesButton = document.getElementById("rules-button");
const rulesPopup = document.getElementById("rules-popup");
const closeBtn = document.getElementById("close-btn");

rulesButton.addEventListener("click", () => {
    rulesPopup.classList.add("show");
    rulesPopup.classList.remove("hidden");
    setTimeout(() => {
        rulesPopup.style.opacity = "10";
    }, 10);
});

closeBtn.addEventListener("click", () => {
    rulesPopup.style.opacity = "0";
    setTimeout(() => {
        rulesPopup.classList.remove("show");
        rulesPopup.classList.add("hidden");
    }, 10);
});