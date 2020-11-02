//Setting up variables
var secondsLeft = 30;
var highscores = [];
var points;
// quiz object filled with questions and choices
var quiz = [{
        q: "Who founded Nintendo?",
        a1: "Fusajiro Yamauchi",
        w1: "Reggie Fils-Aime",
        w2: "Satoru Iwata",
        w3: "Shigeru Miyamoto"
    },
    {
        q: "What was the first video game?",
        a2: "Pong",
        w1: "E.T. the Extra-Terrestrial",
        w2: "PAC-MAN",
        w3: "Donkey Kong"
    },
    {
        q: "What was SEGA debut home console?",
        a3: "SG-1000",
        w1: "Sega Genesis",
        w2: "PlayStation",
        w3: "Dreamcast"
    },
    {
        q: "How many different color Yoshi are there?",
        a4: "11",
        w1: "4",
        w2: "1",
        w3: "8"

    },
    {
        q: "Bungi developed this game as a Xbox launch title",
        a5: "Halo: Combat Evolved",
        w1: "Project Gotham Racing",
        w2: "Conkers: Bad Fur Day",
        w3: "Dead or Alive 3"
    }
];

wrongBttn = document.querySelector("wrong");
rightBttn = document.querySelector("correct");
timeEl = document.querySelector(".time");
display = document.getElementById("qCard");
startClick = document.getElementById("start");

// question = document.section[1].textContent();

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}
startClick.addEventListener("click", function () {
    setTime();
    showQAndA();
});

function showQAndA() {
    display.textContent = " ";
    var question = document.createElement("p");
    var options = document.createElement("div");
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");

    options.setAttribute("class", "choiceButtons")
    choice1.setAttribute("class", "correct");
    choice2.setAttribute("class", "wrong");
    choice3.setAttribute("class", "wrong");
    choice4.setAttribute("class", "wrong");

    question.innerHTML = quiz[0].q;
    choice1.innerHTML = quiz[0].a1;
    choice2.innerHTML = quiz[0].w1;
    choice3.innerHTML = quiz[0].w2;
    choice4.innerHTML = quiz[0].w3;


    display.appendChild(question);
    display.appendChild(options);
    options.appendChild(choice1);
    options.appendChild(choice2);
    options.appendChild(choice3);
    options.appendChild(choice4);
}


wrongBttn.addEventListener("click",
    function () {
        if (choice2 === true || choice3 === true || choice4 === true) {
            secondsLeft = secondsLeft - 5;
        }
    });

rightBttn.addEventListener("click",
    function () {
        if (choice2 === true) {
            score = score + 10;
        }
    });



function gameOver() {
    timeEl.textContent = " ";
    display.textContent = "GAME OVER";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/gameover.png");
    display.appendChild(imgEl);
}