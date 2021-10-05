import React, { useEffect } from 'react'
import style from './DietsContainer.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { getDiets} from '../../actions';
import Diet from '../Diet/Diet.jsx';
const DietsContainer = () => { 
    //global state
    const diets = useSelector(state => state.diets); 
    //HOOKS 
     const dispatch = useDispatch();

     useEffect(()=> {  
         dispatch(getDiets())
     },[dispatch])    
    console.log(diets)
    return(
        <div className={style.container}>
            {diets && diets.map((diet,i) => {
               return <Diet  key={diet.name} name={diet.name}/>
            } )}
        </div>
    ); 
}

export default DietsContainer;