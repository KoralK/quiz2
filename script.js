let currentQuestion = 0;
let score = 0;
let questions = [];

function displayQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('option1').innerText = question.options[0];
    document.getElementById('option2').innerText = question.options[1];
    document.getElementById('option3').innerText = question.options[2];
    document.getElementById('option4').innerText = question.options[3];
}

function checkAnswer(answer) {
    let question = questions[currentQuestion];
    if (question.answer === answer) {
        score++;
        document.getElementById('result').innerText = "Correct! Your score is " + score;
    } else {
        document.getElementById('result').innerText = "Incorrect. The correct answer is " + question.answer;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('next').style.display = 'none';
    }
}

document.getElementById('option1').addEventListener('click', function() {
    checkAnswer(document.getElementById('option1').innerText);
});
document.getElementById('option2').addEventListener('click', function() {
    checkAnswer(document.getElementById('option2').innerText);
});
document.getElementById('option3').addEventListener('click', function() {
    checkAnswer(document.getElementById('option3').innerText);
});
document.getElementById('option4').addEventListener('click', function() {
    checkAnswer(document.getElementById('option4').innerText);
});

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestion();
    });
