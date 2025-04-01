import React, { useState } from 'react';
import { RiRepeatFill } from 'react-icons/ri';

const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }
];

const DailyQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [canEdit, setCanEdit] = useState(true);

    const generateQuestion = () => {
        if (canEdit) {
            const randomIndex = Math.floor(Math.random() * questions.length);
            setCurrentQuestion(questions[randomIndex]);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            alert("თქვენ უკვე დააფიქსირეთ პასუხი!")
        }
    };

    const checkAnswer = (choice) => {
        if (canEdit) {
            setSelectedAnswer(choice);
            setIsCorrect(choice === currentQuestion.answer);
            setCanEdit(false);
        }
    };

    return (
        <div className="p-5 flex flex-col items-center w-full bg-white rounded-2xl shadow-md md:w-1/2">
            <button
                onClick={generateQuestion}
                className="bg-green-500 cursor-pointer flex items-center gap-x-2 text-white px-4 py-2 rounded mb-4 hover:bg-green-700"
            >
                ყოველდღიური შეკითხვა <RiRepeatFill />
            </button>
            {currentQuestion && (
                <div className="border w-full p-4 rounded shadow-md bg-white">
                    <h3 className="text-lg font-bold mb-2">{currentQuestion.question}</h3>
                    <ul className="space-y-2">
                        {currentQuestion.choices.map((choice, index) => (
                            <li
                                key={index}
                                className={`border p-2 rounded cursor-pointer hover:bg-gray-200 ${selectedAnswer === choice ? (isCorrect ? 'bg-green-300 hover:bg-green-300' : 'bg-red-300 hover:bg-red-300') : ''}`}
                                onClick={() => checkAnswer(choice)}
                            >
                                {choice}
                            </li>
                        ))}
                    </ul>
                    {selectedAnswer && (
                        <p className={`mt-3 font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? "სწორია! 🎉" : "არასწორია! ❌"}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default DailyQuiz;
