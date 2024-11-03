const getUserChoice = function (userInput) {
  var userInput = prompt();
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log('You must enter "rock", "paper" or "scissors"');
  }
};

var getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;

    default:
      break;
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  } else if (userChoice === "bomb") {
    return "Sure! You win";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won";
    } else {
      return "You won!!!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won";
    } else {
      return `You won`;
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "You won!!!";
    }
  }
}

function playGame() {
  // const userChoice = prompt;
  const userChoice = getUserChoice();
  console.log(`You chose: ${userChoice}. Good luck!!!`);

  const computerChoice = getComputerChoice();
  console.log(`The computer chose: ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
