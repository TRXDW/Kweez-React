import React from 'react';

const Quizzes = props => {
    const { quizzes } = props;

    const qMap = quizzes.map(quiz => <button key={quiz.id} className="quizzes__item" onClick={() => props.onClick(quiz.id)}>{quiz.quizName}</button>)

    return (

        <div className="quizzes">
            {qMap}
        </div>
    );
}

export default Quizzes;