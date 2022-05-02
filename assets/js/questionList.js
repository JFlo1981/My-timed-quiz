// array of questions/answers to be shuffled for random order
const questionList = [
    {
        question: 'HTML',
        answerArray: [
            { answer: 'What is responsible for the structure of a web page?', correct: true }, // correct answer
            { answer: 'What is responsible for the style of a web page?', correct: false },
            { answer: 'What type of file ends with the ".css" suffix?', correct: false },
            { answer: 'What type of file ends with the ".js" suffix?', correct: false },
        ]
    },
    {
        question: 'Console.log();',
        answerArray: [
            { answer: 'What tool can print content to the Inspector for debugging?', correct: true }, // correct answer
            { answer: 'What tool can find all instances of a word in a code set?', correct: false },
            { answer: 'What command terminates a function?', correct: false },
            { answer: 'What command logs data to local storage?', correct: false },
        ]
    },
    {
        question: 'Concat',
        answerArray: [
            { answer: 'What is a method for combining string data from two strings and returning a single string?', correct: true }, // correct answer
            { answer: 'What is a method for removing a portion of a string?', correct: false },
            { answer: 'What method adds to an array?', correct: false },
            { answer: 'What animal will try to take money from you with elaborate schemes?', correct: false },
        ]
    },
    {
        question: 'Github',
        answerArray: [
            { answer: 'What is a website for hosting code in repositories?', correct: true }, // correct answer
            { answer: 'What is a command line interface program for manipulating data?', correct: false },
            { answer: 'What is a programming language originally known as Ecmascript?', correct: false },
            { answer: 'What is a local storage device on all computers?', correct: false },
        ]
    },
    {
        question: 'Boolean',
        answerArray: [
            { answer: 'What is a data type that expects a "true/false" value?', correct: true }, // correct answer
            { answer: 'What is a data type consisting of characters in quotes?', correct: false },
            { answer: 'What is the element at the top of every HTML file? ', correct: false },
            { answer: 'What is a "parameter" better known as?', correct: false },
        ]
    }
];

function shuffleQuesAndAnswers() {
    let newQuestionList = questionList;
    // shuffle answer order
    for (let i = 0; i < newQuestionList.length; i++) {
        let answerArray = newQuestionList[i].answerArray;
        answerArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    // shuffle question order
    newQuestionList = newQuestionList.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return newQuestionList;
};