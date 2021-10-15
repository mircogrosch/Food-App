import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Nav from "../Nav/Nav.jsx";
import style from "./MyRecipes.module.css";
import { Link } from "react-router-dom";
const MyRecipes = () => {
  //Global State
  const myRecipes = useSelector((state) => state.myRecipes);

  return (
    <div>
      <Nav />{" "}
      {!myRecipes.length ? (
          <div className={style.containerPrincipalNoRecipes}>  
        <div className={style.containerNoRecipes}>
          <img src={process.env.PUBLIC_URL + "img/no_recipes1.png"} />
        </div> 
            <div className={style.containerBtnMake}>
              <Link to='/recipe'> <button>Make Recipes</button> </Link>
            </div>
        </div>
        
      ) : ( 
        <div className={style.containerCard}>    
        {myRecipes.map((recipe) => (
        <div>    
          <Card
            id={recipe.id}
            name={recipe.name}
            type_diets={recipe.diets}
            image={recipe.image}
          />
        </div>
        ))}
        
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
