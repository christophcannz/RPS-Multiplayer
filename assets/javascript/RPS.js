const playeroneScore = 0;
const playertwoScore = 0;
const playeroneScore_span = document.getElementById("p1-score");
const playertwoScore_span = document.getElementById("p2-score");
const totals_div = document.querySelector(".totals");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getp2Choice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function game(p1Choice) {
    const p2Choice = getp2Choice();
}

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

    