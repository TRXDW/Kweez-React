import React from 'react';

const Summary = props => {
    return (
        <React.Fragment>
            <h2 className="summaryHeader">Podsumowanie</h2>
            <ul className="summaryList">
                <li className="summaryList__item">
                    Dobre odp: <span className="summaryList__item summaryList__item--bold">{props.numOfGoodAnswer}/{props.quizQuestionsLength}</span>
                </li>
                <li className="summaryList__item">
                    Średnia: <span className="summaryList__item summaryList__item--bold">{props.avarageGoodAnswer}/{props.quizQuestionsLength}</span>
                </li>
                <li className="summaryList__item">
                    Rarity: <span className="summaryList__item summaryList__item--bold">{props.rarity}</span>
                </li>
            </ul >
            <div className="summaryPromotion"></div>
            <button className="summaryButton" onClick={props.onClick}>ZAKOŃCZ</button>
        </React.Fragment >
    );
}

export default Summary;