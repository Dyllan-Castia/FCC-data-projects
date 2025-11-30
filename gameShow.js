//Questions array holds 5 objects defined starting on line 2. 3 functions are defined below the questions variable that select a random question,
//then select a random answer, then compares the selected answer to the selected question and returns the result's correct string or incorrect string.
const questions = [
  {
    category: "Science",
  question: "What planet is known as the Red Planet?",
  choices: ["Mars", "Jupiter", "Venus"],
  answer: "Mars"
  },
   {
    category: "Geography",
  question: "Which ocean is the largest?",
  choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
  answer: "Pacific Ocean"
  },
   {
    category: "History",
  question: "Who was the first President of the United States?",
  choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
  answer: "George Washington"
  },
   {
    category: "Math",
  question: "What is the value of 7 × 6?",
  choices: ["42", "36", "48"],
  answer: "42"
  },
   {
    category: "Literature",
  question: "Who wrote 'Romeo and Juliet'?",
  choices: ["William Shakespeare", "Mark Twain", "Charles Dickens"],
  answer: "William Shakespeare"
  }
];

//vPass questions as the argument for this function.
function getRandomQuestion(arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num]
};
//^Returns a random object from the questions variable.

//vPass the result of the getRandomQuestion(arr) function as the argument for this function.
function getRandomComputerChoice(arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
};
//^returns a random choice

//vPass the result of getRandomComputerChoice(arr) as the argument for this function.
function getResults(q, ca) {
  if (q.answer === ca) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${q.answer}`;
  }
}
//^returns the results of the computer's choice compared with the correct answer to the selected question from getRandomQuestion(arr)
