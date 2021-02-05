import React from "react"

const GameStart = ({StartTheGame}) => {

    return(
        <div className="game-start">
            <h1 className="game-start__title"> Quiz api</h1>
            <button onClick={StartTheGame} className="game-start__button">Start</button>
        </div>
    )
}

export default GameStart