let userScore = 0;
let computerScore = 0;
const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorDiv = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function convertToWord(input) {
  if (input === "r") return "Rock";
  if (input === "p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_Span.innerHTML = userScore;
  const borderGlow = document.getElementById(userChoice);
  resultDiv.innerHTML = `${convertToWord(userChoice)} beats to ${convertToWord(
    computerChoice
  )}.. You Win..`;
  borderGlow.classList.add("green-glow");
  setTimeout(() => borderGlow.classList.remove("green-glow"), 300);
  $(borderGlow).blur();
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_Span.innerHTML = computerScore;
  const borderGlow = document.getElementById(userChoice);

  resultDiv.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
    computerChoice
  )}.. You Lost..`;
  borderGlow.classList.add("red-glow");
  setTimeout(() => borderGlow.classList.remove("red-glow"), 300);
}

const draw = (userChoice, computerChoice) => {
  const borderGlow = document.getElementById(userChoice);
  resultDiv.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}.. It's Draw..`;
  borderGlow.classList.add("gray-glow");
  setTimeout(() => borderGlow.classList.remove("gray-glow"), 300);
};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener("click", () => game("r"));

  paperDiv.addEventListener("click", () => game("p"));

  scissorDiv.addEventListener("click", () => game("s"));
}

main();
