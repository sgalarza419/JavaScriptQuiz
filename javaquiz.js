//Setting up variables
var secondsLeft = 100;
var highscores = [];
var points = 0;
// quiz object filled with questions and choices
var quiz = [{
        q: "Who founded Nintendo?",
        a: "Fusajiro Yamauchi",
        w1: "Reggie Fils-Aime",
        w2: "Satoru Iwata",
        w3: "Shigeru Miyamoto"
    },
    {
        q: "What was the first video game?",
        a: "Pong",
        w1: "E.T. the Extra-Terrestrial",
        w2: "PAC-MAN",
        w3: "Donkey Kong"
    },
    {
        q: "What was SEGA debut home console?",
        a: "SG-1000",
        w1: "Sega Genesis",
        w2: "PlayStation",
        w3: "Dreamcast"
    },
    {
        q: "How many different color Yoshi are there?",
        a: "11",
        w1: "4",
        w2: "1",
        w3: "8"

    },
    {
        q: "Bungi developed this game as a Xbox launch title",
        a: "Halo: Combat Evolved",
        w1: "Project Gotham Racing",
        w2: "Conkers: Bad Fur Day",
        w3: "Dead or Alive 3"
    }
];

// wrongBttn = document.querySelector(".wrong");
// rightBttn = document.querySelector(".correct");
timeEl = document.querySelector(".time");
display = document.getElementById("qCard");
startClick = document.getElementById("start");
button = document.querySelector(".button");

// question = document.section[1].textContent();



// display.addEventListener("click", function (e) {
//     if (e.target.className == "button")

// });

startClick.addEventListener("click", function () {
    setTime();
    showQAndA();
});



var i = 0;

function showQAndA() {
    display.textContent = " ";

    // console.log(i);
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

    question.innerHTML = quiz[i].q;
    choice1.innerHTML = quiz[i].a;
    choice2.innerHTML = quiz[i].w1;
    choice3.innerHTML = quiz[i].w2;
    choice4.innerHTML = quiz[i].w3;

    display.appendChild(question);
    display.appendChild(options);
    options.appendChild(choice1);
    options.appendChild(choice2);
    options.appendChild(choice3);
    options.appendChild(choice4);

    options.addEventListener("click", function (event) {
        console.log(event.target.className);
        if (event.target.className === "wrong") {
            secondsLeft = secondsLeft - 5;
            console.log(secondsLeft);
        } else(points = points + 10)
        console.log(points)
        i++;
        if (i <= quiz.length) {
            // enter HIGHSCORE
        }
        showQAndA();
    })
};

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

function gameOver() {
    timeEl.textContent = " ";
    display.textContent = "GAME OVER";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/gameover.png");
    display.appendChild(imgEl);
}