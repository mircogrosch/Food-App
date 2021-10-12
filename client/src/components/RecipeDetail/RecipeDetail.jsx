import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, resetDetail } from "../../actions";
import { useParams } from "react-router-dom";
import style from "./RecipeDetail.module.css";
const RecipeDetail = () => {
  //Global state
  const recipe = useSelector((state) => state.recipeDetail);

  //HOOKS
  const { id } = useParams();
  const dispatch = useDispatch();
  /*mounting*/
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  /*unmounting */
  useEffect(() => {
    return dispatch(resetDetail());
  }, []);

  return (
    <div>
      <div className={style.container}>
        <div className={style.portada}>
          <img src={recipe.image} alt="Recipe" />

          <div className={style.scoreContainer}>
            <span>
              <img
                src={process.env.PUBLIC_URL + `/img/icons_detail/score1.png`}
                alt="Score"
              />
              {recipe.score}
            </span>

            <span>
              <img
                src={
                  process.env.PUBLIC_URL + `/img/icons_detail/healthscore.png`
                }
                alt="Health"
              />
              {recipe.health_score}
            </span>
            <span>
              <img
                src={process.env.PUBLIC_URL + `/img/icons_detail/time.png`}
                alt="Time"
              />
              {recipe.time}'
            </span>
          </div>
        </div>

        <div className={style.containerGrupScore}>
          <div className={style.containerName}>
            <h1>{recipe.name} </h1>
          </div>

          <div className={style.containerResume}>
            <h6>{recipe.resume}</h6>
          </div>
        </div>
      </div>

      {/** STEPS*/}
      <div className={style.containerSteps}>
        <div className={style.containerTextSteps}>
          <div className={style.containerIcon}>
            <img src={process.env.PUBLIC_URL + `/img/icons_detail/chef.png`} />
            <h4>Cook this meal</h4>
          </div>

          {Array.isArray(recipe.steps) ? (
            recipe.steps.map((step) => (
              <div className={style.containernNumSteps}>
                <h4>{step.number}</h4>
                <h6>{step.step}</h6>
              </div>
            ))
          ) : (
            <h3>{recipe.steps}</h3>
          )}
        </div>

        <div className={style.containerDiet}>
          <div className={style.containerIcon}>
            <img
              src={process.env.PUBLIC_URL + `/img/icons_detail/typediet.png`}
            />
            <h4>Types Diets</h4>
          </div>
          {recipe.type_diets?.map((diet) => {
            return (
              <div className={style.containerDietText}>
                <img
                  src={process.env.PUBLIC_URL + `/img/icons/${diet}.png`}
                  alt="Diet"
                  className={style.img}
                />
                <h6>{diet}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
