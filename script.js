// Start section
// Targeting button to generate password
var startBtn = document.querySelector("#btn");

var questionsArray = [
  {
    question: "Which built-in method returns the length of the string?",
    answers: ["Length()", "Size()", "Index()", "None of the above"],
    correctAnswer: "length()",
  },
  {
    question:
      "Which of the following is used for assigning a value to a variable?",
    answers: ["x", "+", "=", ":"],
    correctAnswer: "=",
  },
  {
    question: "Arays in JavaScript can be used to store ?",
    answers: ["Other arrays", "Strings()", "Booleans()", "All of the above"],
    correctAnswer: "All the above",
  },
  {
    question: "What does the logical operator ||  mean?",
    answers: ["and", "if", "and/or", "or"],
    correctAnswer: "or",
  },

  console.log("questionsArray"),
];
startBtn.addEventListener("click", startQuiz);

console.log("started");
