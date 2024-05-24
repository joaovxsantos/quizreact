// React 
import { useState } from 'react'
import './App.css'

// Components
import Button from './Components/Button/Button'
import Quiz from './Components/Quiz/Quiz'
import FinalPage from './Components/FinalPage/FinalPage'

// Datas
import { BUTTONS_INFOS } from './data'
import { QUESTIONS_DATA } from './data'


function App() {
  const [currentChoice, setcurrentChoice] = useState(undefined)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [correctChoice, setcorrectChoice] = useState(undefined)
  const [count, setCount] = useState(0)

  let elementQuiz = ''
  let screens = undefined


  const buttonChoice = (e) => {
    setcurrentChoice(e.target.innerText)
  }

  const defineCorrect = (e) => {
    if (+e.target.id === elementQuiz.correct) {
      setCount(count + 1)
    }
    setcorrectChoice(elementQuiz.correct)
  }

  const nextElement = () => {

    if ((currentIndex + 1) >= elementQuiz.options.length) {
      setcurrentIndex(elementQuiz.options.length)
    } else {
      setcurrentIndex(currentIndex + 1)
      setcorrectChoice(undefined)
    }
  }

  const resetQuiz = () => {
    setcurrentChoice(undefined)
    setcorrectChoice(undefined)
    setcurrentIndex(0)
    setCount(0)
  }

  if (currentChoice) {
    elementQuiz = QUESTIONS_DATA[currentChoice][currentIndex]
  }

  if (currentChoice) {
    if (currentIndex >= QUESTIONS_DATA[currentChoice].length) {
      screens = <FinalPage title={currentChoice} onClick={resetQuiz} count={count} />;
    } else {
      screens = (
        <Quiz
          title={currentChoice}
          question={elementQuiz.question}
          button={correctChoice === elementQuiz.correct}
          onClickButton={nextElement}
        >
          {elementQuiz.options.map((option, indx) => (
            <li
              key={indx}
              onClick={defineCorrect}
              id={indx}
              style={{ background: correctChoice == indx && '#14e548' }}
            >
              {option}
            </li>
          ))}
        </Quiz>
      );
    }
  } else {
    screens = (
      <>
        <div className="left">
          <div className="content-left">
            <h1>Bem vindo ao Quiz!</h1>
            <label>Escolha um dos Assuntos para começarmos</label>
          </div>
        </div>
        <div className="right">
          {BUTTONS_INFOS.map((info) => (
            <Button key={info.title} bgColor={info.bgColor} onClick={buttonChoice}>
              {info.title}
            </Button>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container-start" style={currentChoice && { flexDirection: 'column', justifyContent: 'center' }}>
        {screens}
      </div>
    </>
  )
}

export default App
