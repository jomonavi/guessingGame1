 // I did this before i read the week 2 assignment about what functional programming is,
//and i now realized i used a lot of functional programming in the game function.
//I still need to use "jQuery-fy" the game and make the program pretty with css.  
var gameOver = false;
var chances = 5;
var numberTarget = numGenerator();
var guessedNumber = []

function numGenerator() {
    return Math.floor(Math.random() * 101);
}

function repeatNum(array, num) {
    for (var i = 0; i < array.length; i++) {
        if (num === array[i]) {
            return true;
        } else { return false ;}
    };
}


function heatChecker(target, guess) {
    var difference = Math.abs(target - guess)
    var direction = target > guess ? "Try higher." : "Try lower."

    if (difference > 50) {
        $("feedback").text("You're ICE cold. " + direction );
    } else if (difference > 20 && difference <= 50) {
        $("#feedback").text("You're getting warmer. " + direction);
    } else if (difference > 10 && difference <= 20) {
        $("#feedback").text("You're hot. " + direction);
    } else if (difference >= 1 && difference <= 10) {
        $("#feedback").text("You're RED hot. " + direction);
    } else { 
        gameOver = true ;
        $("#feedback").text("You GOT IT!");
        // return null;
    } 
}

function userInput() {
    var userNum = $("#inputBox").val();
    return Number(userNum);
}


function guessingGame() {
    if (gameOver) { return null; }
        
    var playerPick = userInput();
    guessedNumber.push(playerPick);

    if(chances > 0) {
        
        if ((typeof playerPick != "number") || (playerPick > 100) || (playerPick < 1)) {
            $("#feedback").text("You input was not valid!");
        } else if (repeatNum(guessedNumber, playerPick)) {
            $("#feedback").text("You already tried " + playerPick + "! \n Try another number!");
        }
        else { 
            heatChecker(numberTarget, playerPick);
        }

    } else {
            $("#feedback").text("Sorry, you've run out of chances!");
            guessedNumber.length = 0
            // return;
        }
    chances--;

}

$("#hint").click(function() {
        $('#feedback').text("The number is " + numberTarget + ".");
    });

// function clearInput() {
//         return $('#inputBox').val("");
// }


$("#playAgain").on("click", function() {
    $("#feedback").text("You have 5 guesses remaining!");

    gameOver = false;
    chances = 5;
    numberTarget = numGenerator();
});

$("#submitButton").on("click", function(){
    guessingGame();
});

