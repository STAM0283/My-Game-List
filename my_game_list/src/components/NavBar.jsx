import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              <h2>Home</h2>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/game-list">
              <h2>Games List</h2>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/game-clips">
              <h2>Game Clips</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
