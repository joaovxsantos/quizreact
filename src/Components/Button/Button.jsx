import './Button.css'

const Button = ({ children, bgColor, onClick }) => {
    return (
        <>
            <button onClick={onClick} style={{ background: bgColor}}>{children}</button>
        </>

    )
}

export default Button