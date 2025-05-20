// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard
    } else {
        alert('Please enter valid credentials!');
    }
});

// Handle "Sign Up" Button Click
document.getElementById('signupLink').addEventListener('click', function () {
    window.location.href = 'signup.html'; // Redirect to the sign-up page
});

// Placeholder for "Forgot Password" functionality
document.getElementById('forgotPasswordLink').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Forgot Password functionality coming soon!');
});
