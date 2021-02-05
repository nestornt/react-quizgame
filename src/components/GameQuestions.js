import React, {useState, useEffect} from "react"
import axios from "axios"

const GameQuestions = ({url}) => {

    const [questions, setQuestions]  = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showAnswers, setShowAnswers] = useState(false)

    const {question, difficulty, category, correct_answer, answers} = questions

    const api_call = async () => {

        const request = axios.get(url)
        const response = await request

        const questions = response.data.results.map((question) => ({
            ...question,
            answers: [
              question.correct_answer,
              ...question.incorrect_answers,
            ].sort(() => Math.random() - 0.5),
          }))
     
        setQuestions(questions[currentIndex])
    }


    useEffect(() => {
        api_call()
    }, [])

    const handleAnswer = (answer) => {

        if(!showAnswers){

            if(answer === questions.correct_answer){
                setScore(score + 1)
            }
        }
        setShowAnswers(true)
    }
    
      const handleNextQuestion = () => {

        setShowAnswers(false)
        setCurrentIndex(currentIndex + 1)
        api_call()

      }
    
        return question !== undefined ? (

            <div>
                <div className="text-selection">
                {currentIndex >= 10 ? 
                (
                    <div className="final-score">Your score was {score}</div>
                ) : (
                    <div>
                        <div className="game-info">
                            <div className="game-info__difficulty">Difficulty: {difficulty}</div>
                            <div className="game-info__category">{category}</div>
                        </div>
                        <h1 className="text-selection__text"  dangerouslySetInnerHTML={{ __html: question }}></h1>
                        <div className="game-questions">
                        
                        {
                            answers !== undefined ? (

                                answers.map((answer, key) => {

                                    const colorChange = showAnswers ? answer === correct_answer ?
                                                                                'game-questions__buttons__green':
                                                                                'game-questions__buttons__red'  :
                                                                                'text-white-900'

                                    return (

                                        <button 
                                            key={key} 
                                            className={`game-questions__buttons ${colorChange}`}
                                            onClick={() => handleAnswer(answer)}
                                            dangerouslySetInnerHTML={{__html: answer}}/>
                                    )
                                })
                            ) : answers  
                        }
                        </div>
                        {showAnswers &&(
                            <button onClick={handleNextQuestion} className="fa">&#xf101;</button> 
                        )}
                    </div>
                )}
                </div>
            </div>
    ) : (
        <div className="loading">Loading..</div>
    )
    
}

export default GameQuestions