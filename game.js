// I did this before i read the week 2 assignment about what functional programming is,
//and i now realized i used a lot of functional programming in the game function.
//I still need to use "jQuery-fy" the game and make the program pretty with css.  
function numGenerator() {
    return Math.floor(Math.random() * 101);
}

function getNumber() {
    var numberChoice = document.getElementById("inputBox").value;
    alert(numberChoice);
    return numberChoice;
}



function heatChecker(target, guess) {
    var difference = Math.abs(target - guess)
    var direction = target > guess ? "Try higher." : "Try lower."
    if (difference > 50) {
        console.log("You're ICE cold. " + direction );
    } else if (difference > 20 && difference <= 50) {
        console.log("You're getting warmer. " + direction);
    } else if (difference > 10 && difference <= 20) {
        console.log("You're hot. " + direction);
    } else if (difference > 1 && difference <= 10) {
        console.log("You're RED hot. " + direction);
    } else { 
        console.log("You GOT IT!");
        return null;
    } 
}


function guessingGame(userNumber) {
    var numberTarget = numGenerator();
    var hintNum = numberTarget;
    
    for (var chances = 5; chances >= 1; chances -= 1) {
        var playerPick = getNumber();
        console.log(playerPick);
        
        if ((typeof playerPick != "number") || (playerPick > 100) || (playerPick < 1)) {
            console.log("You input was not valid!");
        } else {
            heatChecker(numberTarget, playerPick);
        }
    }
}