import React from 'react';

const LoginForm = props => {
    const { inputLogin, inputPass } = props;
    return (
        <form className="loginForm" onSubmit={e => props.onSubmit(e, inputLogin, inputPass)}>
            <input type="text" className="loginForm__input" value={inputLogin} placeholder="Login" onChange={props.onChange} name="login" />
            <input type="password" className="loginForm__input" value={inputPass} placeholder="Password" onChange={props.onChange} name="pass" />
            <button className="loginForm__button" type="submit">LOG IN</button>
            <button className="loginForm__button loginForm__button--register" onClick={props.onRegisterClick}>REGISTER</button>
            {props.loginError ? <div className="loginForm__error">Nazwa użytkownika lub hasło nieprawidłowe</div> : false}
        </form>
    );
}

export default LoginForm;