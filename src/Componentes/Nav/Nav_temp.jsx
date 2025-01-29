import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

export const Nav = () => {
  return (
    <header>
      <div>
        <h1>ARTERIA</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/Ensayos" >ENSAYOS</Link></li>
          <li><Link to="/Poesia">POESÍA</Link></li>
          <li><Link to="/Posdata">POSDATA</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;