import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.scss';

const Header = () => (
  <header className="c_header">
    <div className="g_center-content">
        <Link className="c_header__logo" to="/">
            <h1>Momo<span></span>Sana</h1>
        </Link>
    </div>
    <Menu />
  </header>
)

export default Header;