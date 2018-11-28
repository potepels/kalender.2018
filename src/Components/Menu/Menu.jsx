import React, { Component } from 'react';
import './Menu.scss';
import {
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/pro-light-svg-icons';
library.add(faBars);

class Menu extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
        menuOpen: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true });
    } else {
      this.setState({ menuOpen: false });
    }
  }


  render() {
    return (
      <nav className={this.state.menuOpen ? "c_navigation c_navigation--open" : "c_navigation" }>
      <button onClick={() => this.toggleMenu()} type="button" className={this.state.menuOpen ? "c_navigation__toggle c_navigation__toggle--clicked" : "c_navigation__toggle" }>
      <FontAwesomeIcon className="snowflake snowflake--small" icon={faBars} />
      </button>
      <ul>
          <li>
            <Link to="/hva-er-dette">Hva er dette?</Link>
          </li>
          <li>
            <Link to="/om-hundene">Om hundene</Link>
          </li>
        </ul>
    </nav>
    )
  }
}

export default Menu;