document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let random_number = Math.floor(Math.random() * 4) + 1;
    let outputBox = document.getElementById("output");

    outputBox.style.display = "block";
    outputBox.innerHTML = `<p><strong>Predicted Severity Level:</strong> ${random_number}</p>`;
});
