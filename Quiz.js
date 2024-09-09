document.getElementById('submit-btn').addEventListener('click', function() {
    let correctAnswers = 0;
    let totalQuestions = 10; // You have 10 questions
    let resultsMessage = '';

    // Define the correct answers
    const answers = {
        q1: 'B',
        q2: 'B',
        q3: 'C',
        q4: 'A',
        q5: 'D',
        q6: 'D',
        q7: 'C',
        q8: 'C',
        q9: 'B',
        q10: 'C'
    };

    // Check each question
    for (let question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === answers[question]) {
                correctAnswers++;
            } else {
                // If the answer is incorrect, show what the correct answer is
                resultsMessage += `<p>Question ${question.slice(1)}: The correct answer is <strong>${answers[question]}</strong>.</p>`;
            }
        } else {
            // If no option was selected for a question
            resultsMessage += `<p>Question ${question.slice(1)}: No answer selected. The correct answer is <strong>${answers[question]}</strong>.</p>`;
        }
    }

    // Display results in the div
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `<h2>You got ${correctAnswers} out of ${totalQuestions} correct.</h2>` + resultsMessage;
});
