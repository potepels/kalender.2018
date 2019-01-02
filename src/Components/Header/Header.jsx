import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faSnowflake } from '@fortawesome/pro-light-svg-icons';
// library.add(faSnowflake);

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