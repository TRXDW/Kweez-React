import React, { Component } from 'react';
import Quizzes from './Quizzes.js';
import Quiz from './Quiz.js';



class Main extends Component {
    state = {
        quizzes: [],
        choosenQuiz: null,
        questionNum: 0,
        didAnswer: false
    }

    handleChooseQuiz = (quizId) => {
        const { quizzes } = this.state;

        const quizSelected = quizzes.filter(quiz => quiz.id === quizId);

        this.setState(prevState => ({
            choosenQuiz: quizSelected[0]
        }))
    }

    handleNextQuestion = () => {
        if (this.state.questionNum <= 10) {
            this.setState(prevState => ({
                questionNum: prevState + 1
            }))
        }
    }

    handleChooseAnswer = () => {
        console.log('eki');
        this.setState(prevState => ({
            didAnswer: !prevState.didAnswer
        }))
    }

    componentDidMount() {
        fetch("data/quizzes.json")
            .then(response => response.json())
            .then(result => this.setState(prevState => ({
                quizzes: [...result]
            })))
    }

    render() {
        const { quizzes, choosenQuiz, questionNum, didAnswer } = this.state;


        return (

            <main className="main">
                {!choosenQuiz
                    ? <Quizzes quizzes={quizzes} onClick={this.handleChooseQuiz} />
                    : <Quiz
                        didAnswer={didAnswer}
                        questionNum={questionNum}
                        onClickNext={this.handleNextQuestion}
                        choosenQuiz={choosenQuiz}
                        onClickAnswer={this.handleChooseAnswer} />}

            </main>
        )
    }
}


export default Main;