import React, { Component } from 'react';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';
class Login extends Component {
    state = {
        inputLogin: "",
        inputPass: "",
        inputEmail: "",
        register: false,
        rightTestLogin: "dawid",
        rightTestPass: "placki"
    }

    handleChange = e => {
        if (e.target.name === "login") {
            this.setState({
                inputLogin: e.target.value
            })
        } else if (e.target.name === "pass") {
            this.setState({
                inputPass: e.target.value
            })
        } else if (e.target.name === "email") {
            this.setState({
                inputEmail: e.target.value
            })
        }

    }


    handleRegisterFormShow = () => {
        this.setState({
            register: !this.state.register,
            inputLogin: "",
            inputPass: ""
        })

        this.props.handleLoginError();
    }

    render() {
        const { inputLogin, inputPass, inputEmail } = this.state;
        return (
            <main className="main">
                {!this.state.register ?
                    <LoginForm
                        inputLogin={inputLogin}
                        inputPass={inputPass}
                        onChange={this.handleChange}
                        onRegisterClick={this.handleRegisterFormShow}
                        onSubmit={this.props.onLoginSubmit}
                        loginError={this.props.loginError}
                    /> :
                    <RegisterForm
                        inputLogin={inputLogin}
                        inputPass={inputPass}
                        inputEmail={inputEmail}
                        onChange={this.handleChange}
                        onBackClick={this.handleRegisterFormShow}
                        onSubmit={this.props.onRegisterSubmit}
                    />
                }
            </main>
        );
    }
}

export default Login;