var secondsLeft = 30;
var highscores = [];
var points;
var quiz = [{
        q1: "Who founded Nintendo?",
        a1: "Fusajiro Yamauchi",
        w1: "Reggie Fils-Aime",
        w2: "Satoru Iwata",
        w3: "Shigeru Miyamoto"
    },
    {
        q2: "What was the first video game?",
        a2: "Pong",
        w1: "E.T. the Extra-Terrestrial",
        w2: "PAC-MAN",
        w3: "Donkey Kong"
    },
    {
        q3: "What was SEGA debut home console?",
        a2: "SG-1000",
        w1: "Sega Genesis",
        w2: "PlayStation",
        w3: "Dreamcast"
    },
    {
        q4: "How many different color Yoshi are there?",
        a4: "11",
        w1: "4",
        w2: "1",
        w3: "8"

    },
    {
        q5: "Bungi developed this game as a Xbox launch title",
        a5: "Halo: Combat Evolved",
        w1: "Project Gotham Racing",
        w2: "Conkers: Bad Fur Day",
        w3: "Dead or Alive 3"
    }
];

bttnClick = document.querySelector("button");
timeEl = document.querySelector(".timer");

question = document.section[1].textContent();

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}
bttnClick.addEventListener("click", function () {
    setTime();
})
}