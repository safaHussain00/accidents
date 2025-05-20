document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach(answer => {
        if (answer.value === "safe") {
            score++;
        }
    });

    let resultMessage = score >= 2 ? "✅ Great! You follow road safety well!" : "⚠️ Be cautious! Improve your safety habits.";
    
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("result").style.fontWeight = "bold";
});
