import React, {useMemo} from "react";
import "./Score.scss"


const Score = ({quizQuestions}: {
    quizQuestions: { question: string, options: string[], answer: string, chosenAnswer: string }[]
}) => {
    const score = useMemo(() => {
        return quizQuestions.filter(quizQuest => quizQuest.answer === quizQuest.chosenAnswer).length
    }, [quizQuestions])

    return <div className="app-score">
        Your score is {score * 100 / quizQuestions.length}
    </div>
}

export default Score