ddocument.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let password = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        return;
    }

    errorMessage.textContent = "";
    
    // Simulating successful account creation
    alert("Account successfully created! Redirecting to dashboard...");
    
    // Redirect to dashboard page
    window.location.href = "dashboard.html";
});
