let start_button = document.querySelector(".button-82-pushable")
let start_screen = document.querySelector(".start-screen")
let game_screen = document.querySelector(".game-screen")
let end_screen = document.querySelector(".end-screen")
let text = document.querySelector("p.text")
let timerDisplay = document.querySelector('.time-box');
let scoreDisplay = document.querySelector(".score")
let final_score = document.querySelector(".final-score")
let input = document.querySelector("input")
let countdown = 1;
let score = 0


const startGame = () => {
    if (navigator.onLine) {
        score=0
        countdown=1
        start_screen.classList.add("hide")
        game_screen.classList.add("show")
        end_screen.classList.remove("show")
        input.focus()
        word()
        startTimer()
    }
    else {
        alert("You are Offline")
    }
}


function startTimer() {
    let timer = setInterval(function () {
        countdown--;
        timerDisplay.textContent = `0${Math.floor(countdown / 60)}:${countdown % 60 < 10 ? '0' + countdown % 60 : countdown % 60}`;

        if (countdown <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    game_screen.classList.remove("show");
    final_score.innerHTML = `Your Final Score is: ${score}`
    end_screen.classList.add("show");
}

const word = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=1")
    const data = await res.json()
    text.innerHTML = data[0]
    check()
}

const check = () => {
    let input = document.querySelector("input")
    if (input.value == text.innerHTML) {
        word()
        input.value = ""
        score++
        scoreDisplay.innerHTML = `RESULT : ${score}`
    }
}