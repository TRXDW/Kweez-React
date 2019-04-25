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

    const { choosenQuiz, questionNum } = props;

    const quizQuestionsLength = choosenQuiz.questions.length;
    const shuffledQuestions = shuffle([...choosenQuiz.questions]);
    const sQuestion = shuffledQuestions[questionNum];

    const answers = sQuestion.answers.map(answer =>
        <button key={answer.answerId} className={true ? `quiz__answer quiz__answer--active` : false} > {`${answer.letter}) ${answer.text}`}</button>)

    console.log(sQuestion);




    return (
        <div className="quiz">
            <div className="quiz__question">
                <div className="quiz__quizName">{choosenQuiz.quizName}</div>
                <p className="quiz__text">{sQuestion.question}</p>

            </div>
            {answers}

            <div className="quiz__numOfQuestion">1/{quizQuestionsLength > 9 ? 10 : quizQuestionsLength}</div>
        </div>

    );
}

export default Quiz;