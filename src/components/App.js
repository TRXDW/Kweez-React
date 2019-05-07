import React, { Component } from 'react';
import MainNavigation from './MainNavigation.js';
import Main from './Main.js';
import StartScreen from './StartScreen.js';
import Login from './Login.js';

class App extends Component {

  state = {
    menuAnim: "",
    leftTriangleAnim: "",
    rightTriangleAnim: "",
    circleAnim: "",
    animEnd: false,
    isLogged: false,
    loginError: false,
    users: null,
    loggedUser: null
  }


  handleShowNavigation = () => {
    const { menuAnim } = this.state;

    if (menuAnim === "menuAnimIn") {
      this.setState({
        menuAnim: "menuAnimOut"
      })
    } else {
      this.setState({
        menuAnim: "menuAnimIn"
      })
    }
  }

  handleStart = () => {
    this.setState(prevState => ({
      leftTriangleAnim: "animated slideOutUp",
      rightTriangleAnim: "animated slideOutDown",
      circleAnim: "animated bounceOut"
    }))
  }

  handleChangeOnAnim = () => {
    this.setState(prevState => ({
      animEnd: true
    }))
  }


  handleLoginSubmit = (e, inputLogin, inputPass) => {
    inputLogin = inputLogin.toLowerCase();
    e.preventDefault();

    const users = [...this.state.users];
    const user = users.filter(user => user.username === inputLogin && user.password === inputPass);

    if (user.length !== 1) {
      this.setState(prevState => ({
        loginError: true
      }))
    } else if (user[0].username === inputLogin && user[0].password === inputPass) {
      this.setState(prevState => ({
        isLogged: !prevState.isLogged,
        loggedUser: user[0]
      }))
    }
  }

  handleRegisterSubmit = e => {
    e.preventDefault();
    this.setState({
      loginError: false
    })
  }

  handleLoginError = () => {
    this.setState({
      loginError: false
    })
  }

  componentDidMount() {
    fetch('data/users.json')
      .then(response => response.json())
      .then(result => this.setState({
        users: result
      }))
  }


  render() {
    const { menuAnim, leftTriangleAnim, rightTriangleAnim, circleAnim, isLogged, loggedUser } = this.state;
    return (
      <>
        {/* {!this.state.animEnd ?
          <StartScreen
            lTriangle={leftTriangleAnim}
            rTriangle={rightTriangleAnim}
            circle={circleAnim}
            onClick={this.handleStart}
            onAnimationEnd={this.handleChangeOnAnim}
          /> : false} */}
        <MainNavigation
          onClick={this.handleShowNavigation}
          menuAnim={menuAnim}
        />
        {isLogged ? <Main loggedUser={loggedUser} /> : <Login
          onLoginSubmit={this.handleLoginSubmit}
          loginError={this.state.loginError}
          onRegisterSubmit={this.handleRegisterSubmit}
          handleLoginError={this.handleLoginError} />}
        {/* <Main /> */}

      </>
    );
  }
}

export default App;
