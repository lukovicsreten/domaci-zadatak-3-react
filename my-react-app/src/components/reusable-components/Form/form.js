import { useState } from "react"
import '../../../App.css';

// 2. Druga reusable komponenta koja sluzi kao login forma
// 3. Form-a je komponenta koja salje username sve do App komponente koja salje posle u home komponentu
// 4. useState hook
// 6. Koriscenje CSS-a

export const Form = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (username && password) {
            props.setName(username)
            setUsername('');
            setPassword('');
        }
    }

    return (
        <div>
            <form className="login-form" onSubmit={submitForm}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}