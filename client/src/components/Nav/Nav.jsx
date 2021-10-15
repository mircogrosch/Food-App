import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = () => {
  return (
    <div>
      <nav className={style.NavContainer}>
        <ul>
          <NavLink to="/recipes" className={style.link} activeClassName={style.active}>
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/recipe" className={style.link} activeClassName={style.active}>
            <li>Create Recipe</li>
          </NavLink>
          <NavLink to="/myRecipes" className={style.link} activeClassName={style.active}>
            <li>My Recipes</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
