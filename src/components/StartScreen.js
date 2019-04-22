import React from 'react';
const StartScreen = props => {
    return (
        <div className="start" id="start">
            <div className={`start__triangle start__triangle--left ${props.lTriangle}`}></div>
            <button className={`start__circle ${props.circle}`} onClick={props.onClick} onAnimationEnd={props.onAnimationEnd}>
                <h1 className="start__title">Kweez</h1>
            </button>
            <div className={`start__triangle start__triangle--right ${props.rTriangle}`}></div>
        </div>
    );
}

export default StartScreen;