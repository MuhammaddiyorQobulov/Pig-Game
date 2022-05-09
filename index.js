const nextStep = document.querySelector(".nextStep");
const nextStep2 = document.querySelector(".nextStep2");
const addOwnedBall = document.querySelector(".addOwnedBall");
const firstPlayerBall = document.querySelector(".firstPlayerBall");
const secondPlayerBall = document.querySelector(".secondPlayerBall");
const firstPlayerScore = document.querySelector(".firstPlayerScore");
const secondPlayerScore = document.querySelector(".secondPlayerScore");
let summCurrentFirst = 0;
let summCurrentSecond = 0;
nextStep.style.background = "dodgerblue";

console.log(nextStep);
let firstBall = 0;
let secondBall = 0;
nextStep.addEventListener("click", function addNewNumberFirst() {
  nextStep2.style.pointerEvents = "none";
  let score = Math.floor(Math.random() * 7);
  if (score != 0) {
    console.log(score);
    summCurrentFirst += score;
    if (score == 1) {
      summCurrentFirst = 0;
      firstBall += summCurrentFirst;
      score = 0;
      summCurrentFirst = 0;
      firstPlayerBall.innerHTML = firstBall;
      firstPlayerScore.innerHTML = 00;
      nextStep.style.pointerEvents = "none";
      nextStep2.style.pointerEvents = "auto";
      nextStep.style.background = "white";
      nextStep2.style.background = "dodgerblue";
    }

    addOwnedBall.addEventListener("click", function total() {
      firstBall += summCurrentFirst;
      score = 0;
      summCurrentFirst = 0;
      firstPlayerBall.innerHTML = firstBall;
      firstPlayerScore.innerHTML = 0;
      nextStep.style.pointerEvents = "none";
      nextStep2.style.pointerEvents = "auto";
      nextStep.style.background = "white";
      nextStep2.style.background = "dodgerblue";
    });

    firstPlayerScore.innerHTML = summCurrentFirst;
  }
});

nextStep2.addEventListener("click", function addNewNumberSecond() {
  let score2 = Math.floor(Math.random() * 7);
  if (score2 != 0) {
    console.log(score2);
    summCurrentSecond += score2;
    if (score2 == 1) {
      summCurrentSecond = 0;
      secondBall += summCurrentSecond;
      score2 = 0;
      summCurrentSecond = 0;
      secondPlayerBall.innerHTML = secondBall;
      secondPlayerScore.innerHTML = secondBall;

      nextStep.style.pointerEvents = "auto";
      nextStep2.style.pointerEvents = "none";
      nextStep2.style.background = "white";
      nextStep.style.background = "dodgerblue";
    }

    addOwnedBall.addEventListener("click", function total2() {
      secondBall += summCurrentSecond;
      score2 = 0;
      summCurrentSecond = 0;
      secondPlayerBall.innerHTML = secondBall;
      secondPlayerScore.innerHTML = secondBall;

      nextStep.style.pointerEvents = "auto";
      nextStep2.style.pointerEvents = "none";
      nextStep2.style.background = "white";
      nextStep.style.background = "dodgerblue";
    });

    secondPlayerScore.innerHTML = summCurrentSecond;
  }
});

// addNewNumber();
