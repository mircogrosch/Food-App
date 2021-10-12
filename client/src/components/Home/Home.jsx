import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import DietsContainer from "../DietsContainer/DietsContainer";
import style from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SelectSort from "../SelectSort/SelectSort";
const Home = () => {
  //Global states
  const recipe = useSelector((state) => state.currentRecipes);

  //Local states
  const [currentPage, setCurrentPage] = useState(1);
  const foodPerPage = 9;

  //variables
  const indexOfLastFood = currentPage * foodPerPage;
  const indexOfFirstFood = indexOfLastFood - foodPerPage;
  const currentFood = recipe.slice(indexOfFirstFood, indexOfLastFood);

  //functions
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //HOOKS
  const dispatch = useDispatch();

  /*mounting*/
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (recipe) {
    return (
      <div>
        <div className={style.containerSearch}>
          <SearchBar />
          <SelectSort />
        </div>
        <div className={style.box}>
          <div className={style.containerImg}>
            <img src="./img/portada.png" alt="Loading" />
          </div>
        </div>

        <div className={style.containerDiets}>
          <h3>Choose your diet:</h3>
          <DietsContainer />
        </div>

        <div className={style.cardContainer}>
          {currentFood.map((recipe) => {
            return (
              <Card
                key={recipe.id}
                name={recipe.name}
                image={recipe.image}
                type_diets={recipe.type_diets}
                id={recipe.id}
              />
            );
          })}
        </div>
        <Pagination
          pagination={pagination}
          allRecipe={recipe.length}
          foodPerPage={foodPerPage}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Home;
