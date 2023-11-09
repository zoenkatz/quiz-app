import React, {useState, useMemo} from 'react';
import questions from "./Utils/quizData.json";
import './App.scss';
import Question from "./Screens/Question/Question";
import Score from "./Screens/Score/Score";

function App() {

    const [quizQuestions, setQuizQuestions] = useState(questions)
    const [isScorePage, setIsScorePage] = useState(false)

    return (
        <div className="quiz-app">
                <h2>Quiz</h2>
                <div className="quiz-app-data">
                {isScorePage ? <Score quizQuestions={quizQuestions}/> :
                    <Question quizQuestions={quizQuestions} setIsScorePage={setIsScorePage}
                              setQuizQuestions={setQuizQuestions}/>}
                </div>
        </div>
    );
}

export default App;
