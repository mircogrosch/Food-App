import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, resetDetail, setLoading } from "../../actions";
import { useParams } from "react-router-dom";
import style from "./RecipeDetail.module.css";
import Loading from "../Loading/Loading";
import Nav from "../Nav/Nav";
const RecipeDetail = () => {
  //Global state
  const recipe = useSelector((state) => state.recipeDetail);
  const loading = useSelector((state)=> state.loading)
  //HOOKS
  const { id } = useParams();
  const dispatch = useDispatch();

  /*mounting*/
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  
  useEffect(()=>{
      recipe? dispatch(setLoading(false)):dispatch(setLoading(true))
  },[recipe])
  
  /*unmounting */
  useEffect(() => {
    dispatch(setLoading(true))
    return dispatch(resetDetail());
  },[]);
 
  return (
    <div>
      <Nav />
      {
        loading ? <Loading /> 
        : <div> 
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
            <img src={process.env.PUBLIC_URL + `/img/icons_detail/chef.png`} alt="Diet"/>
            <h4>Cook this meal</h4>
          </div>

          {Array.isArray(recipe.steps) ? (
            recipe.steps.map((step) => (
              <div className={style.containernNumSteps}>
                <h4 key={step.number}>{step.number}</h4>
                <h6 key={step.step}>{step.step}</h6>
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
              alt="Diet"
            />
            <h4>Types Diets</h4>
          </div>
          {recipe.type_diets?.map((diet,i) => {
            return (
              <div className={style.containerDietText}>
                <img key={diet}
                  src={process.env.PUBLIC_URL + `/img/icons/${diet}.png`}
                  alt="Diet"
                  className={style.img}
                />
                <h6 key={i}>{diet}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
        
      }
   </div>
     
  );

}
export default RecipeDetail;
