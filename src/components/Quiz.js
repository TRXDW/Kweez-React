import React from 'react';

function shuffle(array) {
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

const Quiz = props => {

    const { choosenQuiz, questionNum, didAnswer, sQuestion } = props;
    console.log(sQuestion.answers);
    const quizQuestionsLength = choosenQuiz.questions.length;

    const answers = sQuestion.answers.map(answer =>
        <button
            key={answer.answerId}
            className={true ? `quiz__answer ${didAnswer || 'quiz__answer--active'}` : false}
            onClick={!didAnswer ? props.onClickAnswer : () => false}>
            {`${answer.letter}) ${answer.text}`}
        </button>
    )

    console.log(choosenQuiz);




    return (
        <div className="quiz">
            <div className="quiz__question">
                <div className="quiz__quizName">{choosenQuiz.quizName}</div>
                <p className="quiz__text">{sQuestion.question}</p>

            </div>
            {answers}
            {didAnswer ? <button onClick={props.onClickNext} className="quiz__next">Dalej</button> : <div></div>}

            <div className="quiz__numOfQuestion">{questionNum + 1}/{quizQuestionsLength > 9 ? 10 : quizQuestionsLength}</div>
        </div>

    );
}

export default Quiz;