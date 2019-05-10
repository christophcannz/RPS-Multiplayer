//Rock paper scissors game
//Player 1 vs Player 2
//Rock beats Scissors
//Scissors beats Paper
//Paper beats rock
//Two of the same will tie
//each win gains a score of 1 for either player 1 or player 2
//Store the record of wins and losses to firebase.


  // Your web app's Firebase configuration
  /*var firebaseConfig = {
    apiKey: "AIzaSyD4Yus_A1Gs4f3erFMbQof82QwV5x4jvEM",
    authDomain: "rps-data-ecd74.firebaseapp.com",
    databaseURL: "https://rps-data-ecd74.firebaseio.com",
    projectId: "rps-data-ecd74",
    storageBucket: "rps-data-ecd74.appspot.com",
    messagingSenderId: "715778650242",
    appId: "1:715778650242:web:09967292713385dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/

//let database = firebase.database(); Connect to database.
//let chatData = database.ref("/chat"); Chat function connected to database.
let playeroneScore = 0; //starting point for player 1 score.
let playertwoScore = 0; //starting point for player 2 score.
const playeroneScore_span = document.getElementById("p1-score"); //places player 1 score into html span.
const playertwoScore_span = document.getElementById("p2-score"); //places player 2 score into html span.
const totals_div = document.querySelector(".totals");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getp2Choice() { //player 2 possible choices.
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) { //letters converted to words for user display.
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(p1Choice, p2Choice) {
    playeroneScore++;
    playeroneScore_span.innerHTML = playeroneScore;
    playertwoScore_span.innerHTML = playertwoScore;
    result_p.innerHTML = convertToWord(p1Choice) + " defeats " + convertToWord(p2Choice) + " You Win! ";
}

function lose(p1Choice, p2Choice) {
    playertwoScore++;
    playeroneScore_span.innerHTML = playeroneScore;
    playertwoScore_span.innerHTML = playertwoScore;
    result_p.innerHTML = convertToWord(p1Choice) + " loses " + convertToWord(p2Choice) + " You Lose! ";
}

function tie(p1Choice, p2Choice) {
    result_p.innerHTML = convertToWord(p1Choice) + " equals " + convertToWord(p2Choice) + " It's a Tie! ";
}

function game(p1Choice) {
    const p2Choice = getp2Choice();
    switch (p1Choice + p2Choice) {
        case "rs":
        case "pr":
        case "sp":
            win(p1Choice, p2Choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(p1Choice, p2Choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(p1Choice, p2Choice);
            break;
    }
}

function postMessage(){
    //Get data from the input
    //Build our data
    //Send the data
    //Clear out the input
}

//determine who player 1 or player 2 is. Handled by the database.
//Have a table that says "rounds". This will end up in the Database. Previous scores can be calculated.
//log what player 1 selects, log what player 2 selects 
//Hide what each player has selected until both answers have been selected
//Score the game
//Add the scores.
//Begin next round.

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })    
}


main();

    