document.getElementById('addUserBtn').addEventListener('click', function() {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);

    nameCell.textContent = 'New User';
    emailCell.textContent = 'newuser@example.com';
    ageCell.textContent = Math.floor(Math.random() * 50) + 20; // Random age between 20 and 69
});
