import React, { useState} from 'react'
import './App.css'

const QUESTIONS = [
  {
    questionText: "What stands for JSX in React?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON X-Platform", "JavaScript Xerox"],
    answer: "JavaScript XML"
  },
  {
    questionText: "Which hook is used to manage state?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState"
  },
  {
    questionText: "Who developed React?",
    options: ["Google", "Apple", "Meta (Facebook)", "Microsoft"],
    answer: "Meta (Facebook)"
  },
  {
    questionText: "What is the correct way to output an expression inside JSX?",
    options: ["Using curly braces {}", "Using double quotes \"\"", "Using angle brackets <>", "Using square brackets []"],
    answer: "Using curly braces {}"
  },
  {
    questionText: "Which command is typically used to create a new React application using Vite?",
    options: ["npm create vite@latest", "npm start react", "create-react-app launch", "vite new-app"],
    answer: "npm create vite@latest"
  },
  {
    questionText: "What does the 'Single Page Application' (SPA) concept mean in React?",
    options: ["The app loads a single HTML page and updates it dynamically without reloading.", "The entire website can only have one page total.", "The app can only be viewed on a single monitor screen.", "The code must be written in a single JavaScript file."],
    answer: "The app loads a single HTML page and updates it dynamically without reloading."
  },
  {
    questionText: "Which JavaScript array method creates a brand new array filled with elements that pass a specific test condition?",
    options: ["filter()", "map()", "forEach()", "push()"],
    answer: "filter()"
  },
  {
    questionText: "What is the default value of a variable declared with 'let' that has not been assigned a value?",
    options: ["undefined", "null", "0", "false"],
    answer: "undefined"
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

const handleAnswerClick = (selectedOption) => {
  if ( selectedOption === QUESTIONS[currentQuestionIndex].answer){
    setScore(score + 1);
  }
   
  const nextQuestion = currentQuestionIndex + 1;
  if (nextQuestion < QUESTIONS.length) {
    setCurrentQuestionIndex(nextQuestion);
  } else {
    setShowResults(true);
  }
};

const resetQuiz = () => {
   setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
}

return (
  <div className='main'>
    <h1>React Quiz App</h1>{showResults ? (
        <div className='result'>
          <h2>Quiz Completed! 🎉</h2>
          <p>
            You scored <strong>{score}</strong> out of <strong>{QUESTIONS.length}</strong>!
          </p>
          <button onClick={resetQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className='questions'>
          <h3>Question {currentQuestionIndex + 1} of {QUESTIONS.length}</h3>
          <p>
            {QUESTIONS[currentQuestionIndex].questionText}
          </p>
          
          <div className='options'>
            {QUESTIONS[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    
);
}

export default App