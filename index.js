const readlineSync = require("readline-sync");
console.log("Hello! Welcome to my quiz!");
console.log("This quiz is about me.");
console.log("Rule: \n1.Just Respond with the correct option.\n2. Each correct opton gives 1 point\n3. Each incorrect option result in -0.2");
var score = 0
var questions = [
    {
        ques: "What is my nickname? \n\na: David \nb: CoderSaty \nc: Anu \nd: Resident Evil",
        ans: "b",
    },
    {
        ques: "What is my original name? \n\na: Anuranjn Srivastava \nb: Satyam Srivastava \nc: Coder Satyam \nd: Ramesh Singh",
        ans: "a"
    },
    {
        ques: "What is my home name?\n\na: Anuranjn Srivastava\nb: Satyam Srivastava\nc: Coder Satyam\nd: Ramesh Singh",
        ans: "b"
    },
]

function checkAns(question, answer) {
    if (question.ans.toLowerCase() === answer.toLowerCase()) {
        console.log("correct answer\n");
        score += 1;
    }
    else {
        console.log("wrong answer\nThe correct answer is " + question.ans);
        score -= 0.2;
    }
}
var ch = readlineSync.question("press any key to start the quiz\n");
for (var i = 0; i < questions.length; i++) {
    var ans = readlineSync.question("Ques:" + questions[i].ques + "\n");
    checkAns(questions[i], ans);

}
console.log("Your final score is " + score);