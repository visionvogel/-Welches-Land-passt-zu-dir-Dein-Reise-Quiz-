function startQuiz() {
  let name = document.getElementById("userName").value.trim();
  if (name === "") {
    alert("Bitte gib deinen Namen ein!");
    return;
  }
  document.getElementById("nameInput").style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  document.getElementById("question1").style.display = "block";
}

function nextQuestion(next) {
  document
    .querySelectorAll(".question")
    .forEach((q) => (q.style.display = "none"));
  document.getElementById("question" + next).style.display = "block";
}

function calculateResult() {
  let name = document.getElementById("userName").value;
  let selectedOptions = document.querySelectorAll(
    'input[type="radio"]:checked'
  );
  if (selectedOptions.length < 4) {
    alert("Bitte beantworte alle Fragen!");
    return;
  }
  let country = "Japan";
  let flagUrl = `https://flagcdn.com/w40/jp.png`;
  document.getElementById(
    "result"
  ).innerHTML = `${name}, du solltest nach ${country} reisen! <img src='${flagUrl}' class='flag' alt='Flagge von ${country}'>`;
}
