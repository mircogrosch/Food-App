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
    return(
        <div className={style.container}>
            <Diet key={"all"} name={"all"}/>
            {diets && diets.map((diet) => {
               return <Diet  key={diet.name} name={diet.name}/>
            } )}
        </div>
    ); 
}

export default DietsContainer;