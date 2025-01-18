// Sélection des éléments HTML
const choices = document.querySelectorAll(".choice");
const resultMessage = document.getElementById("result-message");
const choicesMap = {
  rock: "Pierre",
  paper: "Feuille",
  scissors: "Ciseaux",
};

let userChoice = "";
let computerChoice = "";

// Fonction pour obtenir un choix aléatoire pour l'ordinateur
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Fonction pour déterminer le gagnant
function determineWinner(user, computer) {
  if (user === computer) return "Égalité !";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "Vous avez gagné ! 🎉";
  } else {
    return "Vous avez perdu... 😢";
  }
}

// Ajout d'événements de clic aux choix
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.dataset.choice;
    computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    resultMessage.innerHTML = `
      Vous avez choisi : <strong>${choicesMap[userChoice]}</strong><br>
      L'ordinateur a choisi : <strong>${choicesMap[computerChoice]}</strong><br>
      <span class="${
        result.includes("gagné")
          ? "winner"
          : result.includes("perdu")
          ? "loser"
          : "tie"
      }">${result}</span>
    `;
  });
});

// Fonction pour réinitialiser le jeu
function resetGame() {
  userChoice = "";
  computerChoice = "";
  resultMessage.innerHTML = "";
}
