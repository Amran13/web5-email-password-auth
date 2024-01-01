import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        setEmail(event.target.email.value)
        setPassword(event.target.password.value)
        console.log(email, password)
    }
    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="" placeholder='email' /> <br />
                <input type="password" name="password" id="" placeholder='password' /> <br />
                <input type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default Login;