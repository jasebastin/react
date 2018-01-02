import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="header">
            <div className="logo">Anto's</div>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
              <Link to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
              <Link to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
      </header>
    );
  }
}

export default Header;
