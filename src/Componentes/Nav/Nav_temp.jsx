import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

export const Nav = () => {
  return (
    <header>
      <div>
      <Link to="/" ><h1>ARTERIA</h1></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/Ensayos" >ENSAYOS</Link></li>
          <li><Link to="/Poesia">POESÍA</Link></li>
          <li><Link to="/About">ACERCA</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;