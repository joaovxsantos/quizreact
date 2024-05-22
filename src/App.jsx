// React 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Button from './Components/Button/Button'
import Quiz from './Components/Quiz/Quiz'

// Datas
import { BUTTONS_INFOS } from './data'
import { QUESTIONS_DATA } from './data'


function App() {
  const [currentChoice, setcurrentChoice] = useState(undefined)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [correctChoice, setcorrectChoice] = useState(undefined)
  let elementQuiz = ''

  const buttonChoice = (e) => {
    setcurrentChoice(e.target.innerText)
  }

  const defineCorrect = () => {
    setcorrectChoice(elementQuiz.correct)
  }

  const nextElement = () => {
    setcurrentIndex(currentIndex + 1)
    setcorrectChoice(undefined)
  }

  if (currentChoice) {
    elementQuiz = QUESTIONS_DATA[currentChoice][currentIndex]
  }

  return (
    <>
      <div className="container-start" style={currentChoice && { flexDirection: 'column', justifyContent: 'center' }}>
        {!currentChoice ?
          <>
            <div className="left">
              <div className="content-left">
                <h1>Bem vindo ao Quiz!</h1>
                <label>Escolha um dos Assuntos para começarmos</label>
              </div>
            </div>
            <div className="right">
              {BUTTONS_INFOS.map((info) => <Button key={info.title} bgColor={info.bgColor} onClick={buttonChoice} >{info.title}</Button>)}
            </div>
          </>
          :
          <>

            <Quiz title={currentChoice} question={elementQuiz.question} button={correctChoice === elementQuiz.correct} onClickButton={nextElement}>
              {elementQuiz.options.map((option, indx) => <li onClick={defineCorrect} style={{ background: correctChoice == indx && '#14e548' }}>{option}</li>)}
            </Quiz>
          </>}
      </div>
    </>
  )
}

export default App
