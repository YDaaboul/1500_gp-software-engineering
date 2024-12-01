To disable page refresh for 10 minutes, you can use a combination of local storage and JavaScript. Here’s how to implement this:

Step-by-Step Implementation
Set a Timestamp in Local Storage: When the quiz starts, save the current time in local storage.

Check the Timestamp on Page Load: When the page loads, check if 10 minutes have passed since the timestamp. If not, alert the user and prevent the refresh.

HTML Structure: Ensure you have your existing HTML setup.

JavaScript Code
Here's how to implement the above logic:

javascript
Copy code
const QUIZ_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

window.onload = function() {
    const lastQuizTime = localStorage.getItem('lastQuizTime');
    const now = Date.now();

    if (lastQuizTime && (now - lastQuizTime < QUIZ_DURATION)) {
        alert("You cannot refresh or start a new quiz for 10 minutes.");
        // Optionally, you can redirect them or disable buttons here
    } else {
        // Allow the quiz to start
        startQuizButton.disabled = false; // Enable the start quiz button
    }
};

function startQuiz() {
    const studentName = studentNameInput.value.trim();
    if (studentName) {
        // Save the current timestamp
        localStorage.setItem('lastQuizTime', Date.now());

        nameInput.classList.add('hide');
        quizContent.classList.remove('hide');
        userNameSpan.textContent = `Student: ${studentName}`;
        currentQuestionIndex = 0;
        score = 0;
        nextButton.classList.remove('hide');
        submitButton.classList.add('hide');
        resultDiv.classList.add('hide');
        startTimer();
        showQuestion();
    } else {
        alert('Please enter your name before starting the quiz.');
    }
}