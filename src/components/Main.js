import React, { Component } from 'react';
import Quizzes from './Quizzes.js';
import Quiz from './Quiz.js';



class Main extends Component {
    state = {
        quizzes: [],
        choosenQuiz: null,
        questionNum: 0,
        didAnswer: false,
        sQuestions: [],
        sQuestion: [],
        selectedAnswer: null,
        userQuizData: null
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
        const { loggedUser } = this.props;

        const quizSelected = quizzes.filter(quiz => quiz.id === quizId);
        const userQuizData = loggedUser.quizzesProgress.find(quizProgress => quizProgress.quizId === quizId);
        console.log(userQuizData);

        this.setState(prevState => ({
            choosenQuiz: quizSelected[0],
            userQuizData
        }))

        this.handleShuffleQuestion(quizSelected[0]);
    }

    handleShuffleQuestion = choosenQuiz => {
        const shuffledQuestions = this.shuffle([...choosenQuiz.questions]);
        this.setState(prevState => ({
            sQuestions: [...shuffledQuestions]
        }))
        this.handleChooseQuestion(shuffledQuestions);
    }

    handleChooseQuestion = shuffledQuestions => {
        this.setState(prevState => ({
            sQuestion: prevState.sQuestions[this.state.questionNum]
        }))
    }

    handleNextQuestion = () => {
        if (this.state.questionNum < this.state.choosenQuiz.questions.length - 1) {
            this.setState(prevState => ({
                questionNum: prevState.questionNum + 1,
                sQuestion: prevState.sQuestions[prevState.questionNum + 1],
                didAnswer: !prevState.didAnswer
            }))
        } else {
            this.setState({
                choosenQuiz: null,
                questionNum: 0,
                didAnswer: false,
                sQuestions: [],
                sQuestion: [],
                cAns: ''
            })
        }
    }

    handleChooseAnswer = (e, answerId) => {

        this.setState(prevState => ({
            didAnswer: !prevState.didAnswer,
            selectedAnswer: answerId
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
        const { quizzes, choosenQuiz, questionNum, didAnswer, sQuestion, selectedAnswer, userQuizData } = this.state;
        const { loggedUser } = this.props;
        // console.log(this.props.loggedUser);
        return (

            <main className="main">
                {!choosenQuiz
                    ? <Quizzes quizzes={quizzes} onClick={this.handleChooseQuiz} loggedUser={loggedUser} />
                    : <Quiz
                        didAnswer={didAnswer}
                        questionNum={questionNum}
                        onClickNext={this.handleNextQuestion}
                        choosenQuiz={choosenQuiz}
                        onClickAnswer={this.handleChooseAnswer}
                        sQuestion={sQuestion}
                        selectedAnswer={selectedAnswer}
                        userQuizData={userQuizData} />}

            </main>
        )
    }
}


export default Main;