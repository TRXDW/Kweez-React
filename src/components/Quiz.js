import React from 'react';

const Quiz = () => {
    return (

        <div className="quiz">
            <div className="quiz__question">
                <div className="quiz__quizName">Kolory</div>
                <p className="quiz__text">Jakiego koloru jest czarwony maluch?</p>

            </div>
            <div className="quiz__answer quiz__answer--choose quiz__answer--goodAns">{"A) Czerwony"}</div>
            <div className="quiz__answer quiz__answer--badAns">{"B) Zielony"}</div>
            <div className="quiz__answer">{"C) Różowy"}</div>
            <div className="quiz__answer">{"D) Niebieski"}</div>
            <div className="quiz__numOfQuestion">1/10</div>
        </div>

    );
}

export default Quiz;