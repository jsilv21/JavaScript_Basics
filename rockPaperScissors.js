/*
CodeCademy Rock Paper Scissors JS game
The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.

bomb cheat code means user always wins..

*/


const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb'){
    return userInput
  }
  else {
    console.log('Invalid Input.')
  }
}

function getComputerChoice(){
  switch (choice = Math.floor(Math.random()*3)){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'Tie!'
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Wins - paper covers rock!';
    }
    else {
      return 'User wins - rock breaks scissors!';
    }
  }
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User wins - paper covers rock!'
      }
      else {
        return 'Computer wins - scissors cuts paper!'
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'User wins - scissors cuts paper!'
      }
        else {
          return 'Computer wins - rock breaks scissors!'
        }
      }
    if(userChoice === 'bomb'){
      return 'User wins! Bomb cheat code.'
    }
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('The computer threw: '+ computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
