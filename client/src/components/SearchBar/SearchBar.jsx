import React, { useState } from 'react'; 
import style from './SearchBar.module.css'
import { getRecipesByQuery } from '../../actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => { 

    //HOOKS
    const dispatch = useDispatch()

    //HANDLES
    const [input,setInput] = useState(""); 
    const handleInput=(e)=>{
        setInput(e.target.value)
      
    }
    const handleSubmit = (input,e)=>{
        e.preventDefault() 
        e.target.value= "";
        dispatch(getRecipesByQuery(input))
    }
    return (
       
            <form onSubmit={(e)=>handleSubmit(input,e)}>
                
                <button className={style.button}type="submit" value="Search Recipe"/>
                <input className={style.input} type="text" onChange={(e)=>handleInput(e)} placeholder="Search Recipe"/>  

                   
                 
 
            </form>

    );
}

export default SearchBar;