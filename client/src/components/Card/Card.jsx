import React from 'react';
import style from './Card.module.css' 
import { Link } from 'react-router-dom';

const Card = ({id,image,name,type_diets}) => { 
    return(
       <Link to={`/detail/${id}`}>  <div className={style.containerCard}> 
            <div className={style.imgContainer}> 
                <img src={image?image:"./img/notyet.jpg"} alt="Recipe"/>
            </div>
            <div className={style.containerText}>

             <div className={style.container}> 
                <div className={style.containerLog}>   </div>
                <h1>{name}</h1>
            </div>
               
                <h6>{type_diets}</h6>
            </div>
        </div></Link>
    );
}

export default Card;