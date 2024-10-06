// Get references to DOM elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for sending the message
sendBtn.addEventListener('click', () => {
  let userMessage = userInput.value.trim();
  if (userMessage) {
    displayMessage(userMessage, 'user');
    getBotResponse(userMessage);
    userInput.value = ''; // Clear input field
  }
});

// Function to display a message in the chat box
function displayMessage(message, sender) {
  let messageElement = document.createElement('p');
  messageElement.classList.add(`${sender}-message`);
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Simulating bot response
function getBotResponse(userMessage) {
  setTimeout(() => {
    let botMessage = `You said: "${userMessage}". This is a simulated response.`;
    displayMessage(botMessage, 'bot');
  }, 1000); // Simulate response delay
}
