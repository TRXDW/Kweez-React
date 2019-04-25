import React, { Component } from 'react';
import Quizzes from './Quizzes.js';
import Quiz from './Quiz.js';



class Main extends Component {
    state = {
        quizzes: [],
        choosenQuiz: null,
        questionNum: 0,
        didAnswer: false,
        sQuestion: []
    }

    shuffle = array => {
        let i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i + 1));

            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

        return array;
    }

    handleChooseQuiz = (quizId) => {
        const { quizzes } = this.state;

        const quizSelected = quizzes.filter(quiz => quiz.id === quizId);

        this.setState(prevState => ({
            choosenQuiz: quizSelected[0]
        }))

        this.handleChooseQuestion(quizSelected[0])
    }

    handleChooseQuestion = choosenQuiz => {
        const shuffledQuestions = this.shuffle([...choosenQuiz.questions]);
        console.log(shuffledQuestions)
        this.setState(prevState => ({
            sQuestion: shuffledQuestions[this.state.questionNum]
        }))
    }

    handleNextQuestion = () => {
        if (this.state.questionNum < this.state.choosenQuiz.questions.length - 1) {
            this.setState(prevState => ({
                questionNum: prevState.questionNum + 1
            }))
        }
    }

    handleChooseAnswer = () => {
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
        const { quizzes, choosenQuiz, questionNum, didAnswer, sQuestion } = this.state;

        console.log(this.state.sQuestion);
        return (

            <main className="main">
                {!choosenQuiz
                    ? <Quizzes quizzes={quizzes} onClick={this.handleChooseQuiz} />
                    : <Quiz
                        didAnswer={didAnswer}
                        questionNum={questionNum}
                        onClickNext={this.handleNextQuestion}
                        choosenQuiz={choosenQuiz}
                        onClickAnswer={this.handleChooseAnswer}
                        sQuestion={sQuestion} />}

            </main>
        )
    }
}


export default Main;