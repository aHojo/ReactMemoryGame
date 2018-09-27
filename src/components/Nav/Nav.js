import React from 'react';
import List from '../List';
import './Nav.css'
const Nav = ({score, topscore}) => (
    <nav id="nav-override" className="navbar navbar-expand-lg navbar-light bg-light">
        <List score={score} topscore={topscore} />
    </nav>
);

export default Nav;