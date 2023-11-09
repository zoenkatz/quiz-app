import React, {useMemo, useState} from "react";
import QuestionOption from "../../Components/QuestionOption";
import "./Question.scss"

const Question = ({quizQuestions, setIsScorePage, setQuizQuestions}: {
    quizQuestions: { question: string, options: string[], answer: string, chosenAnswer: string }[],
    setIsScorePage: (val: boolean) => void,
    setQuizQuestions: (val: { question: string, options: string[], answer: string, chosenAnswer: string }[]) => void
}) => {
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState("")
    const currentQuestion = useMemo(() => {
        return quizQuestions[currentQuestionNum]
    }, [quizQuestions, currentQuestionNum])

    const handleNext = (e: any) => {
        e.preventDefault()
        setQuizQuestions([...quizQuestions.slice(0, currentQuestionNum), {
            ...currentQuestion,
            chosenAnswer: currentAnswer || currentQuestion.chosenAnswer
        }, ...quizQuestions.slice(currentQuestionNum + 1)])
        setCurrentQuestionNum(currentQuestionNum + 1)
        setCurrentAnswer("")

    }

    const handlePrev = (e: any) => {
        e.preventDefault()
        setCurrentQuestionNum(currentQuestionNum - 1)
        setCurrentAnswer("")
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setQuizQuestions([...quizQuestions.slice(0, currentQuestionNum), {
            ...currentQuestion,
            chosenAnswer: currentAnswer
        }, ...quizQuestions.slice(currentQuestionNum + 1)])
        setIsScorePage(true)
    }

    return <form>
        <div className="question-left">{quizQuestions.length - currentQuestionNum} questions left</div>
        <div className="quiz-app-question">
            {currentQuestion?.question}
        </div>
        <div className="quiz-app-answers">
            {currentQuestion.options.map((option) => {
                return <QuestionOption key={option} option={option} currentQuestion={currentQuestion}
                                       setCurrentAnswer={setCurrentAnswer}/>
            })}
        </div>
        <div className="quiz-app-buttons">
            {currentQuestionNum > 0 ? <button onClick={handlePrev}>Prev</button> : null}
            {currentQuestionNum < quizQuestions.length - 1 ?
                <button onClick={handleNext}>Next</button>
                : <button onClick={handleSubmit}>Submit</button>}
        </div>
    </form>
}

export default Question