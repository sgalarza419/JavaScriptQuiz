var secondsLeft = 30;
var highscores = [];
var points;
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

bttnClick = document.querySelector("button");
timeEl = document.querySelector(".time");
display = document.getElementById("qCard");

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
bttnClick.addEventListener("click", function () {
    setTime();
    display.textContent = " ";
    var question = document.createElement("p");
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");

    question.innerHTML = quiz[0].q;
    answer1.innerHTML = quiz[0].a1;
    answer2.innerHTML = quiz[0].w1;
    answer3.innerHTML = quiz[0].w2;
    answer4.innerHTML = quiz[0].w3;


    display.appendChild(question);
    display.appendChild(answer1);
    display.appendChild(answer2);
    display.appendChild(answer3);
    display.appendChild(answer4);

})







function gameOver() {
    timeEl.textContent = " ";
    display.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/gameover.png");
    display.appendChild(imgEl);
}