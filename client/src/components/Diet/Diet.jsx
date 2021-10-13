import React from "react";
import style from "./Diet.module.css";
import { filterByDiets } from "../../actions";
import { useDispatch } from "react-redux";
const Diet = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className={style.btn}>
        <img
          name={name}
          src={`./img/icons/${name}.png`}
          alt="Diet"
          onClick={(e) => dispatch(filterByDiets(e.target.name))}
        />
        <span className={style.tooltiptext}>{name.toUpperCase()}</span>
      </button>
    </div>
  );
};
export default Diet;
