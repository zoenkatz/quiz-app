import React from "react";

const QuestionOption = ({option, currentQuestion, setCurrentAnswer}: {option: string, currentQuestion: { question: string, options: string[], answer: string, chosenAnswer: string }, setCurrentAnswer: (val: string) => void}) => {
    return <div key={option}>
        <input type="radio" id={option} name={currentQuestion.question}
               defaultChecked={currentQuestion.chosenAnswer === option}
               onChange={() => setCurrentAnswer(option)}/><label htmlFor={option}>{option}</label>
    </div>
}

export default QuestionOption