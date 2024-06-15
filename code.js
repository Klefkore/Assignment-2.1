// function that simulates the craps game
function playCraps() {
    // generates two random numbers between 1 and 6
    let die1 = rollDie();
    let die2 = rollDie();
    
    // calculates the sum of both dice
    let sum = die1 + die2;
    
    // display the result message
    let resultMessage = `Die 1: ${die1} <br> Die 2: ${die2} <br> Sum: ${sum} <br>`;

    // game rules to determine the results
    if (sum === 7 || sum === 11) {
        // if the sum is 7 or 11, player loses :(
        resultMessage += "CRAPS - OH DEAR! You lost!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        // if both dice are the same value, player wins yippeeee
        resultMessage += "HOORAY You're a winner!";
    } else {
        // and if not then it's a push 
        resultMessage += "You pushed! :0 ";
    }

    // the output results displayed on the page
    document.getElementById('gameResult').innerHTML = resultMessage;
}

// helper function that rolls a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
