import React, { Component } from 'react';
import Quizzes from './Quizzes.js';
import Quiz from './Quiz.js';
import Summary from './Summary.js'



class Main extends Component {
    state = {
        quizzes: [],
        choosenQuiz: null,
        questionNum: 0,
        didAnswer: false,
        sQuestions: [],
        sQuestion: [],
        selectedAnswer: null,
        userQuizData: null,
        numOfGoodAnswers: 0,
        summaryExist: false,
        avarageGoodAnswer: 0
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
        } else if (this.state.summaryExist) {
            this.setState(prevState => ({
                choosenQuiz: null,
                questionNum: 0,
                didAnswer: false,
                sQuestions: [],
                sQuestion: [],
                cAns: '',
                numOfGoodAnswers: 0,
                avarageGoodAnswer: 0,
                summaryExist: !prevState.summaryExist
            }))
        }
        else {

            this.handleCountAvarageGoodAnswer([...this.state.userQuizData.lastSolvesGoodAns]);
            this.setState(prevState => ({
                // choosenQuiz: null,
                // questionNum: 0,
                // didAnswer: false,
                // sQuestions: [],
                // sQuestion: [],
                // cAns: '',
                // numOfGoodAnswers: 0,
                summaryExist: !prevState.summaryExist
            }))
        }
    }

    handleCountAvarageGoodAnswer = lastSolves => {
        // console.log(lastSolves);
        let avarageGoodAnswer = lastSolves.reduce((x, y) => x + y);
        avarageGoodAnswer = avarageGoodAnswer / 10;
        // console.log(result)

        this.setState(prevState => ({
            avarageGoodAnswer
        }))
    }

    handleChooseAnswer = (e, answerId) => {
        const { sQuestion } = this.state;
        if (sQuestion.correctAnswerIndex === answerId) {
            this.setState(prevState => ({
                numOfGoodAnswers: prevState.numOfGoodAnswers + 1
            }))

        }
        this.setState(prevState => ({
            didAnswer: !prevState.didAnswer,
            selectedAnswer: answerId
        }))
        console.log(this.state.numOfGoodAnswers);

    }

    componentDidMount() {
        fetch("data/quizzes.json")
            .then(response => response.json())
            .then(result => this.setState(prevState => ({
                quizzes: [...result]
            })))
    }

    render() {
        const { quizzes, choosenQuiz, questionNum, didAnswer, sQuestion, selectedAnswer, userQuizData, numOfGoodAnswers, avarageGoodAnswer } = this.state;
        const { loggedUser } = this.props;
        console.log(userQuizData);


        return (

            <main className="main">
                {!choosenQuiz
                    ? <Quizzes quizzes={quizzes} onClick={this.handleChooseQuiz} loggedUser={loggedUser} />
                    : this.state.summaryExist
                        ? <Summary
                            numOfGoodAnswer={numOfGoodAnswers}
                            rarity={userQuizData.rarity}
                            quizQuestionsLength={choosenQuiz.questions.length}
                            onClick={this.handleNextQuestion}
                            avarageGoodAnswer={avarageGoodAnswer} />
                        : <Quiz
                            didAnswer={didAnswer}
                            questionNum={questionNum}
                            onClickNext={this.handleNextQuestion}
                            choosenQuiz={choosenQuiz}
                            onClickAnswer={this.handleChooseAnswer}
                            sQuestion={sQuestion}
                            selectedAnswer={selectedAnswer}
                            userQuizData={userQuizData} />
                }
            </main>
        )
    }
}


export default Main;