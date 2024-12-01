const questions = [
    // Terminal Commands
    {
        question: "Which command is used to list files in a directory?",
        answers: [
            { text: "mkdir", correct: false },
            { text: "ls", correct: true },
            { text: "cd", correct: false },
            { text: "rm", correct: false }
        ]
    },
    {
        question: "Which command is used to move files?",
        answers: [
            { text: "cp", correct: false },
            { text: "ls", correct: false },
            { text: "pwd", correct: false },
            { text: "mv", correct: true },
        ]
    },
    {
        question: "What does the `pwd` command display?",
        answers: [
            { text: "Print Working Directory", correct: true },
            { text: "Print Write Directory", correct: false },
            { text: "Path Working Directory", correct: false },
            { text: "Path Write Directory", correct: false }
        ]
    },
    {
        question: "Which command is used to copy files?",
        answers: [
            { text: "cp", correct: true },
            { text: "mv", correct: false },
            { text: "rm", correct: false },
            { text: "ls", correct: false }
        ]
    },
    {
        question: "How do you remove a file?",
        answers: [
            { text: "rm", correct: true },
            { text: "delete", correct: false },
            { text: "rmdir", correct: false },
            { text: "del", correct: false }
        ]
    },
    {
        question: "What command displays the current directory path?",
        answers: [
            { text: "pwd", correct: true },
            { text: "ls", correct: false },
            { text: "cd", correct: false },
            { text: "path", correct: false }
        ]
    },
    {
        question: "Which command is used to change directories?",
        answers: [
            { text: "cd", correct: true },
            { text: "mv", correct: false },
            { text: "ls", correct: false },
            { text: "dir", correct: false }
        ]
    },
    {
        question: "How do you display the contents of a file?",
        answers: [
            { text: "cat", correct: true },
            { text: "more", correct: false },
            { text: "view", correct: false },
            { text: "less", correct: false }
        ]
    },
    {
        question: "Which command lists all the files, including hidden ones?",
        answers: [
            { text: "ls -l", correct: false },
            { text: "ls -h", correct: false },
            { text: "ls -a", correct: true },
            { text: "ls -s", correct: false }
        ]
    },
    {
        question: "How do you create a new directory?",
        answers: [
            
            { text: "rmdir", correct: false },
            { text: "mkdir", correct: true },
            { text: "mk", correct: false },
            { text: "new_dir", correct: false }
        ]
    },
    // HTML
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Tech Markup Language", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        answers: [
            
            { text: "link", correct: false },
            { text: "href", correct: false },
            { text: "a", correct: true },
            { text: "nav", correct: false }
        ]
    },
    {
        question: "Which tag is used to create unordered list in HTML?",
        answers: [
            
            { text: "ol", correct: false },
            { text: "list", correct: false },
            { text: "ul", correct: true },
            { text: "li", correct: false }
        ]
    },
    {
        question: "How do you add a comment in HTML?",
        answers: [
            { text: ' &lt; !-- comment -- &gt; ', correct: true },  // Use &lt; for < and &gt; for >
            { text: '/* comment */', correct: false },
            { text: '// comment', correct: false },
            { text: '# comment', correct: false }
        ]
        
    },
    {
        question: "Which tag is used for the largest heading?",
        answers: [
            { text: "head4", correct: false },
            { text: "head2", correct: false },
            { text: "head3", correct: false },
            { text: "head1", correct: true }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { text: "lb", correct: false },
            { text: "break", correct: false },
            { text: "br", correct: true },
            { text: "line", correct: false }
        ]
    },
    {
        question: "How do you specify the language of a document?",
        answers: [
            { text: '&lt;html lang=en &gt;', correct: true },
            { text: '&lt;html language=en &gt;', correct: false },
            { text: '&lt;html lang= English &gt;', correct: false },
            { text: '&lt;html locale= en &gt;', correct: false }
        ]
        
    },
    {
        question: "Which tag is used to display a table in HTML?",
        answers: [
            { text: 'tab;', correct: false },
            { text: 'tbl;', correct: false },
            { text: 'table;', correct: true },
            { text: 'tr;', correct: false }
        ]
        
    },
    {
        question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
        answers: [
            { text: "Provides alternative text for images", correct: true },
            { text: "Sets the image source", correct: false },
            { text: "Adjusts the image size", correct: false },
            { text: "Defines image alignment", correct: false }
        ]
    },
    {
        question: "Which attribute is used to provide a tooltip in HTML?",
        answers: [
            { text: "tooltip", correct: false },
            { text: "hint", correct: false },
            { text: "title", correct: true },
            { text: "desc", correct: false }
        ]
    },
    // CSS
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "How do you apply a style to an element in CSS?",
        answers: [
            { text: "element { style: value; }", correct: true },
            { text: "element { value: style; }", correct: false },
            { text: "element: style(value);", correct: false },
            { text: "element: value(style);", correct: false }
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "bg-color", correct: false },
            { text: "background", correct: false }
        ]
    },
    {
        question: "How do you set the font size in CSS?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "size", correct: false },
            { text: "font-style", correct: false }
        ]
    },
    {
        question: "What does the `padding` property do in CSS?",
        answers: [
            { text: "Adds space inside  element's border", correct: true },
            { text: "Adds space outside  element's border", correct: false },
            { text: "Changes border color", correct: false },
            { text: "Changes background color", correct: false }
        ]
    },
    {
        question: "How do you center text in CSS?",
        answers: [
            { text: "text-align: center;", correct: true },
            { text: "align: center;", correct: false },
            { text: "text-center: true;", correct: false },
            { text: "center-text: yes;", correct: false }
        ]
    },
    {
        question: "Which property is used to change the font family?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-style", correct: false },
            { text: "text-family", correct: false },
            { text: "font-type", correct: false }
        ]
    },
    {
        question: "How do you set the width of an element?",
        answers: [
            { text: "width", correct: true },
            { text: "element-width", correct: false },
            { text: "size-width", correct: false },
            { text: "box-width", correct: false }
        ]
    },
    {
        question: "What is the default value of the `position` property in CSS?",
        answers: [
            { text: "static", correct: true },
            { text: "relative", correct: false },
            { text: "absolute", correct: false },
            { text: "fixed", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the text color?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "background-color", correct: false }
        ]
    },
    {
        question: " What is a closure in JavaScript?",
        answers: [
            { text: "A function within another  that remembers its scope", correct: true },
            { text: "A way to keep data private", correct: true },
            { text: "A type of error", correct: false },
            { text: "A method of string manipulation", correct: false }
        ]
    },
    {
        question: " Which keyword is used to create a new object in JavaScript?",
        answers: [
            { text: "new", correct: true },
            { text: "create", correct: false },
            { text: "object", correct: false },
            { text: "this", correct: false }
        ]
    },
    {
        question: " What is the output of `typeof null`?",
        answers: [
            { text: "object", correct: true },
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "error", correct: false }
        ]
    },
    {
        question: "How do you check if a variable is an array?",
        answers: [
            { text: "Array.isArray(variable)", correct: true },
            { text: "variable instanceof Array", correct: true },
            { text: "typeof variable === 'array'", correct: false },
            { text: "variable.isArray()", correct: false }
        ]
    },
    {
        question: " Which method adds one or more elements to the end of an array?",
        answers: [
            
            { text: "pop()", correct: false },
            { text: "unshift()", correct: false },
            { text: "push()", correct: true },
            { text: "shift()", correct: false }
        ]
    },
    {
        question: " What does the `JSON.stringify()` method do?",
        answers: [
            { text: "Converts a JS object to a JSON string", correct: true },
            { text: "Parses a JSON string to a JS object", correct: false },
            { text: "Formats a string as JSON", correct: false },
            { text: "Validates a JSON string", correct: false }
        ]
    },
    {
        question: " How can you create a new array from an existing array with modified elements?",
        answers: [
            
            { text: "filter()", correct: false },
            { text: "map()", correct: true },
            { text: "reduce()", correct: false },
            { text: "splice()", correct: false }
        ]
    },
    {
        question: " What is `NaN` in JavaScript?",
        answers: [
            
            { text: "New Array Number", correct: false },
            { text: "Not a Number", correct: true },
            { text: "Not a Name", correct: false },
            { text: "Not an Object", correct: false }
        ]
    },
    {
        question: " Which of the following is a way to handle errors in JavaScript?",
        answers: [
            
            { text: "error...handle", correct: false },
            { text: "catch...try", correct: false },
            { text: "throw...catch", correct: false },
            { text: "try...catch", correct: true },
        ]
    },
    {
        question: "What does the command 'git push' do?",
        answers: [
            { text: "Uploads local changes to a remote repository", correct: true },
            { text: "Downloads changes from a remote repository", correct: false },
            { text: "Creates a new branch in the remote repository", correct: false },
            { text: "Commits changes to the local repository", correct: false },
        ]
    }
];


const nameInput = document.getElementById('name-input');
const studentNameInput = document.getElementById('student-name');
const startQuizButton = document.getElementById('start-quiz');
const quizContent = document.getElementById('quiz-content');
const userNameSpan = document.getElementById('user-name');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const scoreSpan = document.getElementById('score');
const correctAnswersDiv = document.getElementById('correct-answers');
const timerDiv = document.getElementById('timer');

let currentQuestionIndex = 0;
let score = 0;
let timer;

startQuizButton.addEventListener('click', startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});
//stop refresh for 10 minutes
//stop refresh for 10 minutes
//stop refresh for 10 minutes
//stop refresh for 10 minutes
const QUIZ_DURATION = 1 * 60 * 1000; // 1 minutes in milliseconds

window.onload = function() {
    const lastQuizTime = localStorage.getItem('lastQuizTime');
    const now = Date.now();

    // Check if the quiz was taken within the last 10 minutes
    if (lastQuizTime && (now - lastQuizTime < QUIZ_DURATION)) {
        alert("You cannot start a new quiz for 10 minutes.");
        startQuizButton.disabled = true; // Disable the start quiz button
    } else {
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

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerHTML = `Question ${questionNo}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    // Add the selected class for visual feedback
    selectedButton.classList.add("selected");

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all buttons after an answer is selected
    });

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        submitButton.classList.remove('hide');
    }
}


function showScore() {
    resetState();
    const studentName = studentNameInput.value.trim(); // Retrieve the student's name
    questionText.innerHTML = "Quiz Results"; // Change to just "Quiz Results"
    document.getElementById('student-name-result').textContent = `${studentName}, your score is ${score} out of ${questions.length}!`; // Display the name and score
    submitButton.classList.add('hide');
    resultDiv.classList.remove('hide');
    scoreSpan.textContent = `${score} out of ${questions.length}`;
    showCorrectAnswers();
    clearInterval(timer);
}



function showCorrectAnswers() {
    correctAnswersDiv.innerHTML = "<h3>Correct Answers:</h3>";
    questions.forEach((question, index) => {
        const correctAnswer = question.answers.find(answer => answer.correct);
        correctAnswersDiv.innerHTML += `<p><strong>Q${index + 1}:</strong> ${correctAnswer.text}</p>`;
    });
}

submitButton.addEventListener("click", showScore);

function startTimer() {
    let time = 5 * 60; // 5 minutes in seconds
    updateTimerDisplay(time);
    
    timer = setInterval(function() {
        time--;
        updateTimerDisplay(time);

        if (time <= 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDiv.textContent = `Time remaining: ${minutes}:${seconds}`;
}
