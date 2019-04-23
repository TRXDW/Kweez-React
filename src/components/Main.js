import React, { Component } from 'react';
import Quizzes from './Quizzes.js';
import Quiz from './Quiz.js';



class Main extends Component {
    state = {}
    render() {
        return (
            <main className="main">
                {/* <Quizzes /> */}
                <Quiz />
            </main>
        )
    }
}


export default Main;