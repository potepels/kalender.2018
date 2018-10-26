import React from 'react';
import './Menu.scss';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Menu = () => (
  <nav className="navigation">
    <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/hva-daaa">Hva daaa</Link>
        </li>
        <li>
          <Link to="/dsad">404</Link>
        </li>
      </ul>
  </nav>
)

export default Menu;