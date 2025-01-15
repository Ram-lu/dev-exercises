// eslint-disable-next-line react/prop-types
const Input = ({ type, value, onchange, placeholder, required = false }) => (
    <div className="field">
        <div className="control">
            <input 
                className="input"
                type={type}
                value={value}
                onChange={onchange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    </div>
)
 
export default Input;