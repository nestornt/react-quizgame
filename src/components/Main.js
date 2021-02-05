import React, {useState} from "react"

import Context from "../Context"

import Header from "./Header"
import TextSelection from "./TextSelection"
import DifficultySelection from "./DifficultySelection"
import GameQuestions from "./GameQuestions"

const Main = () => {
    
    const [difficulty, setDifficulty] = useState('no-seleccionada')

    const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`

    const selectedDifficulty = (difficult) => setDifficulty(difficult)
       
    return difficulty === 'no-seleccionada' ? (
        <div className="main">
            <Header/>
            <TextSelection/>
            <Context.Provider value={{selectedDifficulty}}>
                <DifficultySelection/>
            </Context.Provider>
        </div>
    ) : (

        <div className="main">
            <Header/>
            <GameQuestions url={url}/>
        </div>   
    ) 
}

export default Main