import React, { Component } from 'react';
import Quizzes from './Quizzes.js';



class Main extends Component {
    state = {}
    render() {
        return (
            <main className="main">
                <Quizzes />
            </main>
        )
    }
}


export default Main;