// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, isPrimary = true}) => (
    <button
        className={`button ${isPrimary ? 'is-primary' : 'is-light'}`}
        onClick={onClick}
    >
        {text}
    </button>
)

export default Button;