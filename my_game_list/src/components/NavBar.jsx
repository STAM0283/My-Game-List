import React from "react";
import home_run from "../images/home_run.svg";
import Game_icone from "../images/Game_icone.png";
import Game_Clips from "../images/Game_Clips.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className = "navBar">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              <h2><img src = {home_run} alt = "Image Home" style ={{width: "20%"}}/>Home</h2>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/game-list">
              <h2><img src = {Game_icone} alt = "Icone Game" />Games List</h2>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/game-clips">
              <h2><img src = {Game_Clips} alt = "Icone Video Game" />Game Clips</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
