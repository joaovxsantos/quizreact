import './Quiz.css'

const Quiz = ({ children, title, question, button, onClickButton }) => {
    return (
        <div className="quiz-container">
            <h1>Quiz de {title}</h1>

            <div className="answers">
                <h3>{question}</h3>
                <ol>
                    {children}
                </ol>
            </div>
            {button && <button onClick={onClickButton}>Proxima pergunta</button>}
        </div>
    )
}

export default Quiz