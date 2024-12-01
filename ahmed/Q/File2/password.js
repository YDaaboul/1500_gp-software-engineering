function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '123'; // Change this to your desired password
    const alertBox = document.getElementById('content');

    if (password === correctPassword) {
        window.location.href = "Content.html"; // Redirect to index.html
    } else {
        alertBox.style.display = 'flex'; // Show custom alert
        alertBox.querySelector('.alert-message').textContent = 'Incorrect password, please try again.';
    }
}

function closeAlert() {
    const alertBox = document.getElementById('content');
    alertBox.style.display = 'none'; // Hide alert when close button is clicked
}