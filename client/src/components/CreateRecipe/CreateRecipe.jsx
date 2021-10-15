import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CreateRecipe.module.css";
import Nav from "../Nav/Nav";
import { saveMyRecipe } from "../../actions";
const CreateRecipe = () => {
  //global states
  const diets = useSelector((state) => state.diets);

  //local states
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    resume: "",
    score: "",
    health_score: "",
    steps: "",
    diets: [],
    image:`${process.env.PUBLIC_URL}img/myrecipe.png`,
    time:"",
  });
 

  //methods
  const validate = (input, e) => {
    const { name } = e.target;
    let error = {};
    switch (name) {
      case "name":
        if (!/^[/A-Za-z\s]+$/g.test(input.name)) {
          error.name = "The name must not contain numbers";
        }
        break;
      case "score":
        if (!/^[0-9]?[0-9]{1}$|^100$/.test(input.score)) {
          error.score = "The score must be from 0 to 100";
        }
        break;
      case "health_score":
        if (!/^[0-9]?[0-9]{1}$|^100$/.test(input.health_score)) {
          error.health_score = "The health score must be from 0 to 100";
        }
        break;
      case "time":
        parseInt(input.time)
        if(input.time < 0){
           error.time = "The time shouldn't be negative number"
        }
        break;
      case "image":
        if(!/^(ftp|http|https):\/\/[^ "]+$/.test(input.image)){
          error.image = "It must be a correct URL"
        }
        break;
      default:
        return "";
    }
    return error;
  };
//HOOKS 
const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({ ...input, [e.target.name]:e.target.value }, e));
  };
  const handleSubmit = (newDiet, e) => {
    e.preventDefault();
    dispatch(saveMyRecipe(newDiet))
  };
  const handleCheckBox = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.id],
    });
  };
  const isDisabled = (errors)=>{
    return Object.keys(errors).length > 0
  }
  return ( 
    <div>    
      <Nav/>
    <form onSubmit={(e) => handleSubmit(input, e)}>
      <div className={style.form}>
        <div className={style.containerInput}>
          <div className={style.grupo}>
            <input
              type="text"
              name="name"
              className={style.input}
              required
              onChange={(e) => handleInput(e)}
            />
            <span className={errors.name ? style.error : style.barra}></span>
            {errors.name && <h6 id={style.errorWord}>{errors.name}</h6>}
            <label className={style.label}>Name</label>
          </div>

          <div className={style.grupo}>
            <textarea
              name="resume"
              rows="3"
              required
              className={style.input}
              onChange={(e) => handleInput(e)}
            ></textarea>
            <span className={style.barra}></span>
            <label className={style.label}>Resume</label>
          </div>

          <div className={style.grupo}>
            <textarea
              name="steps"
              rows="3"
              required
              className={style.input}
              onChange={(e) => handleInput(e)}
            ></textarea>
            <span className={style.barra}></span>
            <label className={style.label}>Steps</label>
          </div>

          <div className={style.grupo}>
            <input
              type="number"
              name="score"
              required
              className={style.input}
              onChange={(e) => handleInput(e)}
            />
            <span className={errors.score ? style.error : style.barra}></span>
            {errors.score && <h6 id={style.errorWord}>{errors.score}</h6>}
            <label className={style.label}>Score</label>
          </div>

          <div className={style.grupo}>
            <input
              type="number"
              name="health_score"
              className={style.input}
              onChange={(e) => handleInput(e)}
              required
            />
            <span
              className={errors.health_score ? style.error : style.barra}
            ></span>
            {errors.health_score && (
              <h6 id={style.errorWord}>{errors.health_score}</h6>
            )}
            <label className={style.label}>Health Score</label>
          </div>
          
          <div className={style.grupo}>
            <input
              type="number"
              name="time"
              className={style.input}
              onChange={(e) => handleInput(e)}
              required
            />
            <span
              className={errors.time ? style.error : style.barra}
            ></span>
            {errors.time && (
              <h6 id={style.errorWord}>{errors.time}</h6>
            )}
            <label className={style.label}>Time Cook</label>
          </div>

          <div className={style.grupo}>
            <input
              type="text"
              name="image"
              className={style.input}
              onChange={(e) => handleInput(e)}
            />
            <span className={errors.image ? style.error : style.barra}></span>
            {errors.image && <h6 id={style.errorWord}>{errors.image}</h6>}
            <label className={style.label}>Url Image</label>
          </div>


        </div>

        <div className={style.containerDiet}>
          <div className={style.containerIconDiet}> 
              <img src={process.env.PUBLIC_URL + `/img/icons_detail/typediet.png`} alt="type diets"/>
              <span>Choose Diet</span>
          </div>  
          {diets.map((diet) => {
            return (
              <div className={style.containerDietMap}>
                <input
                  type="checkbox"
                  id={diet.name}
                  name="diets"
                  onChange={(e) => handleCheckBox(e)}
                />
                <img
                  src={process.env.PUBLIC_URL + `/img/icons/${diet.name}.png`}
                  alt="Diet"
                />
                <label>{diet.name.toUpperCase()}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.button}>
        <input type="submit" disabled={isDisabled(errors)} value="Create Recipe" />
      </div>
    </form>
    </div>
  );
};

export default CreateRecipe;
