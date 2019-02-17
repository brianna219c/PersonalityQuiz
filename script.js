let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)
function processResults(){
  console.log ("submitButtonPushed")
}

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)
