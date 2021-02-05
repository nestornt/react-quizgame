import React,{useState} from "react"

import Wrapper from "./components/Wrapper"
import Main from "./components/Main"

import GameStart from "./components/GameStart"


const App = () => {

  const [gameStart, setGameStart] = useState(false);

  const StartTheGame = () => setGameStart(true);
 
  return gameStart === true ? (
    <Wrapper>
      <Main/>
    </Wrapper>
  ) : (
    <div className="main">
      <GameStart StartTheGame={StartTheGame}/>
    </div>
    
  )
  
}

export default App