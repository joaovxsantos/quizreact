import './FinalPage.css'


const FinalPage = ({ hits, title, onClick, count }) => {



    return (
        <div className="final-container">
            <h2>Quiz de {<a className={title}>{title}</a>} Finalizado!</h2>
            <div>
                <p>Muito obrigado por participar!</p>
                <p><a className={title}>Você acertou {count} de 4 questões!</a></p>
            </div>
            <button onClick={onClick} className={title}>Jogar novamente</button>
        </div>
    )
}

export default FinalPage