// toglogchiin eeljiig hadgalah huwisagch 1-r toglogchiig 0 2-r toglogchiig 1 gey

var activePlayer = 0;
// toglogchiig onoog hadgalah huwisagch
var scores = [0, 0];

//toglogchiin eeljindee tsugluulj  baigaa onoog hadgalah huwisagch
var roundScore = 0;
//shoonii ali talaaraaa buusniig hadgalah hadgalah heregtei 1-6 sanamsarguigeer utgiig uusgej ogno
document.getElementById("score-0").innerHTML = "0";
document.getElementById("score-1").innerHTML = "0";
document.querySelector("#current-0").innerHTML = "0";
var diceImg = document.querySelector(".dice");
diceImg.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", () => {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.style.display = "block";
  diceImg.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchNextPlayer();
  }
});
document.querySelector(".btn-hold").addEventListener("click", () => {
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
  } else {
    switchNextPlayer();
  }
});

//toglogch solidog function bichlee
function switchNextPlayer() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  diceImg.style.display = "none";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
