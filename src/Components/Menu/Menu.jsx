import React from 'react';
import './Menu.scss';
import {
  Link
} from 'react-router-dom';

const Menu = () => (
  <nav className="navigation">
    <ul>
        <li>
          <Link to="/hva-daaa">Hva daaa</Link>
        </li>
        <li>
          <Link to="/2016">Gammel kalender</Link>
        </li>
        <li>
          <Link to="/dsad">404</Link>
        </li>
      </ul>
  </nav>
)

export default Menu;