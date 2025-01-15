import Input from "../common/Input"
import Button from "../common/Button"
import { useState } from "react"
import { login } from "../../services/api"


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await login(email, password)
            setMessage(result.message || 'Login successful')
            console.log(result.token)
        } catch (err) {
            setMessage(err.response?.data?.error || 'Something went wrong')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input type="email" value={email} onchange={e => setEmail(e.target.value)} placeholder='Email' required />
            <Input type="password" value={password} onchange={e => setPassword(e.target.value)} placeholder='Password' required />
            <Button text="Login"/>
            {message && <p>{message}</p>}
        </form>
    )
}

export default LoginForm