// eslint-disable-next-line react/prop-types
const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button;