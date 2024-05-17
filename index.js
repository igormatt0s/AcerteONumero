let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;
let userAttempt = document.getElementById("inputBox");
let buttonNewGame = document.getElementById("newGameButton");
let body = document.body;

userAttempt.addEventListener("change", () => {
  const userNumber = Number(userAttempt.value);
  const eachNumberUser = Array.from(String(userAttempt.value), Number);
  const eachNumberComputer = Array.from(String(computerNumber), Number);

  if (userNumber <= 9999 && userNumber >= 1000) {
    userNumbers.push(" " + userNumber); //número add na array
    document.getElementById("guesses").innerHTML = userNumbers;
    for (let i = 0; i < 4; i++) {
      if (eachNumberUser[i] == eachNumberComputer[i]) {
        document.getElementById(`number` + i).innerHTML = eachNumberUser[i];
      }
    }

    if (attempts < maxGuesses) {
      if (userNumber > computerNumber && userNumber <= 9999) {
        document.getElementById("textOutput").innerHTML =
          "Sua tentativa é muito alta!<br>Tente um número menor.";
        document.getElementById("inputBox").value = ""; // zera a caixa de texto depois do ENTER
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
      } else if (userNumber < computerNumber && userNumber >= 1000) {
        document.getElementById("textOutput").innerHTML =
          "Sua tentativa é muito baixa!<br>Tente um número maior.";
        document.getElementById("inputBox").value = "";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
      } else {
        document.getElementById("textOutput").innerHTML = "Parabéns!!!";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
        document
          .getElementById("inputBox")
          .setAttribute("Readonly", "Readonly"); //método que seta o atributo como Readonly e o valor string Readonly
      }
    } else {
      document.getElementById("textOutput").innerHTML =
        "Você perdeu!<br>O número correto era: " + computerNumber;
      document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
    }
  } else {
    document.getElementById("textOutput").innerHTML =
      userNumber +
      ": é um Valor Inválido!<br>Valores válidos entre 1000 - 9999!";
    document.getElementById("inputBox").value = "";
  }
});

buttonNewGame.addEventListener("click", () => {
  window.location.reload(); //aplica o reload na window
  userAttempt.value = "";
});

body.addEventListener("load", newGame());

function newGame() {
  userAttempt.value = "";
  computerNumber = Math.floor(Math.random() * 9000) + 1000; // número random de 1000 a 9999
  //console.log(computerNumber);
}
