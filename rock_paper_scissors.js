const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === ("rock" || "paper" || "scissors")) {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Wrong input! Try again.");
  }
};

const getComputerChoice = function () {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;

    case 1:
      computerChoice = "paper";
      break;

    case 2:
      computerChoice = "scissors";
      break;

    default:
      break;
  }
  return computerChoice;
};

const determineWinner = function (userChoice, computerChoice) {
  //userChoice = getUserChoice();

  if (userChoice === computerChoice) {
    return console.log("The game was a tie");
  } else if (userChoice === "bomb") {
    return console.log("Sure! You win ;)");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return console.log("The computer won");
    } else {
      return console.log("You won!!!");
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return console.log("The computer won");
    } else {
      return console.log(`You won`);
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return console.log("The computer won");
    } else {
      return console.log("You won!!!");
    }
  }
};

function playGame() {
  const userChoice = getUserChoice("BOMB");
  console.log(`You chose: ${userChoice}. Good luck!!!`);

  const computerChoice = getComputerChoice();
  console.log(`The computer chose: ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
