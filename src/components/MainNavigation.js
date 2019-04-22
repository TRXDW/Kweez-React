import React from 'react';

const MainNavigation = props => {
    return (
        <nav className={`mainNav ${props.menuAnim}`}>
            <ul className="menu">
                <li className="menu__item">
                    <a className="menu__link" href="http://localhost:3000/">Kweezzes</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="http://localhost:3000/">Introduction</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="http://localhost:3000/">Setting</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="http://localhost:3000/">About us</a>
                </li>
            </ul>
            <button className="mainNav__button  " onClick={props.onClick}>Menu</button>
        </nav>
    )
}
export default MainNavigation;