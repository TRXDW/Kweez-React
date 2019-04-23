import React from 'react';

const RegisterForm = props => {
    const { inputLogin, inputPass, inputEmail } = props;
    return (
        <form className="loginForm">
            <input type="text" className="loginForm__input" value={inputLogin} placeholder="Login" onChange={props.onChange} name="login" />
            <input type="password" className="loginForm__input" value={inputPass} placeholder="Password" onChange={props.onChange} name="pass" />
            <input type="text" className="loginForm__input" value={inputEmail} placeholder="E-mail" onChange={props.onChange} name="email" />
            <button className="loginForm__button loginForm__button--register" type="submit">REGISTER</button>
            <button className="loginForm__button loginForm__button--back" onClick={props.onBackClick}>BACK</button>
        </form>
    );
}

export default RegisterForm;