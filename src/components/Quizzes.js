import React from 'react';

const Quizzes = props => {
    const { quizzes, loggedUser } = props;

    const qMap = quizzes.map(quiz => <button key={quiz.id}
        className={`quizzes__item quizzes__item--${loggedUser.quizzesProgress[quiz.id - 1].rarity}`}
        onClick={() => props.onClick(quiz.id)}>{quiz.quizName}</button>)

    return (

        <div className="quizzes">
            {qMap}
        </div>
    );
}

export default Quizzes;