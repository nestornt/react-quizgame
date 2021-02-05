import React, {useContext} from "react"

import Context from "../Context"

const DifficultySelection = () => {

    const {selectedDifficulty} = useContext(Context)

    return(
        
        <div className="difficulty-selection">
            <button onClick={() => selectedDifficulty('easy')} className="difficulty-selection__button">easy</button>
            <button onClick={() => selectedDifficulty('medium')} className="difficulty-selection__button">medium</button>
            <button onClick={() => selectedDifficulty('hard')} className="difficulty-selection__button">hard</button>
        </div>

    )
}

export default DifficultySelection