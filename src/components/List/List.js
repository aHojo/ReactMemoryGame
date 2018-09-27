import React from 'react';
import './List.css';

const List = () => (

        <ul className="navbar-nav">
            <li className="nav-item nav-brand">
                <a href="/">Clicky Game</a>
            </li>
            <li className="nav-item">
                Click an image to begin!
            </li>
            <li className="nav-item">
                Score: 0 | Top Score: 0
            </li>
        </ul>
);

export default List;