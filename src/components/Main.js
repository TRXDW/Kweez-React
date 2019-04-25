import React, { Component } from 'react';
import Quizzes from './Quizzes.js';
import Quiz from './Quiz.js';



class Main extends Component {
    state = {
        quizzes: [],
        choosenQuiz: 0,
        questionNum: 0
    }

    handleChooseQuiz = (quizId) => {
        this.setState(prevState => ({
            choosenQuiz: quizId
        }))

    }

    handleNextQuestion = () => {
        if (this.state.questionNum <= 10) {
            this.setState(prevState => ({
                questionNum: prevState + 1
            }))
        }
    }

    componentDidMount() {
        fetch("data/quizzes.json")
            .then(response => response.json())
            .then(result => this.setState(prevState => ({
                quizzes: [...result]
            })))
    }

    render() {
        const { quizzes, choosenQuiz, questionNum } = this.state;

        const quizSelected = quizzes.filter(quiz => quiz.id === choosenQuiz);


        return (

            <main className="main">
                {choosenQuiz === 0
                    ? <Quizzes quizzes={quizzes} onClick={this.handleChooseQuiz} />
                    : <Quiz questionNum={questionNum} onClickAnswer={this.handleNextQuestion} choosenQuiz={quizSelected[0]} />}
            </main>
        )
    }
}


export default Main;