import React from 'react';
import style from './Card.module.css' 

const Card = ({image,name,type_diets}) => { 
    return(
        <div className={style.containerCard}> 
            <div className={style.imgContainer}> 
                <img src={image?image:"./notyet"} alt="Recipe"/>
            </div>
            <div className={style.containerText}>

             <div className={style.container}> 
                <div className={style.containerLog}>   </div>
                <h1>{name}</h1>
            </div>
               
                <h6>{type_diets}</h6>
            </div>
        </div>
    );
}

export default Card;