import React from 'react';
import './Menu.scss';
import {
  Link
} from 'react-router-dom';

const Menu = () => (
  <nav className="c_navigation">
    <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/2016">2016 kalender</Link>
        </li>
        <li>
          <Link to="/om">Om</Link>
        </li>
      </ul>
  </nav>
)

export default Menu;