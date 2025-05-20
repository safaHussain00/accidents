document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    // Show confirmation popup
    alert('Your accident report has been successfully submitted. Thank you.');

    // Reset the form (optional)
    document.getElementById('reportForm').reset();
});
