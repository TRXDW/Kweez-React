import React from 'react';


const Quiz = props => {

    const { choosenQuiz, questionNum, didAnswer, sQuestion, selectedAnswer, userQuizData } = props;
    const quizQuestionsLength = choosenQuiz.questions.length;

    const answers = sQuestion.answers.map(answer =>
        <button
            key={answer.answerId}
            className={didAnswer ? `quiz__answer ${sQuestion.correctAnswerIndex === answer.answerId ? 'quiz__answer--goodAns' : `${selectedAnswer === answer.answerId ? "quiz__answer--badAns" : ""}`}` : "quiz__answer quiz__answer--active"}
            onClick={!didAnswer ? (e) => props.onClickAnswer(e, answer.answerId) : () => false}>
            {`${answer.letter}) ${answer.text}`}
        </button>
    )

    return (
        <div className="quiz">
            <div className={`quiz__question quiz__question--${userQuizData.rarity}`} >
                <div className={`quiz__quizName quiz__quizName--${userQuizData.rarity}`}>{choosenQuiz.quizName}</div>
                <p className="quiz__text">{sQuestion.question}</p>

            </div>
            {answers}
            {didAnswer ? <button onClick={props.onClickNext} className="quiz__next">{questionNum + 1 === quizQuestionsLength ? "Zakończ" : "Dalej"}</button> : <div></div>}

            <div className="quiz__numOfQuestion">{questionNum + 1}/{quizQuestionsLength > 9 ? 10 : quizQuestionsLength}</div>
        </div>

    );
}

export default Quiz;