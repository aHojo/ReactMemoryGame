import React from 'react';
import './List.css';

const List = ({score, topscore}) => (

        <ul className="navbar-nav">
            <li className="nav-item nav-brand">
                <a href="/">Clicky Game</a>
            </li>
            <li className="nav-item">
                Click an image to begin!
            </li>
            <li className="nav-item">
                Score: {score} | Top Score: {topscore}
            </li>
        </ul>
);

export default List;