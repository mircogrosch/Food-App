import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import style from './CreateRecipe.module.css'
//name,resume,score,health_score,steps,diets

const CreateRecipe = ()=>{
    //global states
    const diets = useSelector(state=> state.diets);

    //local states
    const [input, setInput] = useState({name:"",resume:"",score:"",health_score:"",steps:"",diets:[]});
    const [errors, setErrors] = useState({});
    
    //methods 
    const validate = (input,e)=> {
        const {name} = e.target; 
        let error={}; 
    switch(name){ 
         case "name": 
           if(!/^[/A-Za-z\s]+$/g.test(input.name)){ error.name="The name must not contain numbers"}
            break;
        case "score":
            if(!/^[0-9]?[0-9]{1}$|^100$/.test(input.score)){error.score="The score must be from 0 to 100"}
            break;
        case "health_score": 
        if(!/^[0-9]?[0-9]{1}$|^100$/.test(input.health_score)){error.health_score="The health score must be from 0 to 100"}
        break;
        default: return "";
        }
        return error; 
    }

    const handleInput = (e)=> { 
        setInput({
            ...input, 
            [e.target.name]:e.target.value
        })
        setErrors(validate({...input},e))
    }
    const handleSubmit = async(newDiet,e)=> { 
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/recipe',newDiet);
        alert(response.data);
    }
    const handleCheckBox= (e)=>{ 
        setInput({
            ...input,
            diets:[...input.diets,e.target.id]
        })
    }
    console.log(input);
    return (

           
                <form className={style.form} onSubmit={(e)=>handleSubmit(input,e)}> 
                
                    <div className={style.grupo}>
                        <input type="text" name="name"  className={style.input} required onChange={(e)=>handleInput(e)}/><span className={style.barra}></span>
                        {errors.name && <h6>{errors.name}</h6>}
                        <label>Name</label>
                    </div>
                    
                    <div className={style.grupo}> 
                    <input type="text" name="resume"    required className={style.input} onChange={(e)=>handleInput(e)}/><span className={style.barra}></span>
                    <label>Resume</label>
                    </div>


                    <div className={style.grupo}> 
                   <textarea name="steps" rows="3"   required className={style.input} onChange={(e)=>handleInput(e)}></textarea><span className={style.barra}></span>
                   <label>Steps</label>
                   </div>
               

                    <div className={style.grupo}> 
                    <input type="number" name="score"  required className={style.input} onChange={(e)=>handleInput(e)}/><span className={style.barra}></span>
                    {errors.score && <h6>{errors.score}</h6>}
                    <label>Score</label>
                    </div>


                    <div className={style.grupo}> 
                    <input type="number" name="health_score" className={style.input} onChange={(e)=>handleInput(e)} required/><span className={style.barra}></span>
                    {errors.health_score && <h6>{errors.health_score}</h6>}
                    <label>Health Score</label>
                    </div>
                        {
                            diets.map(diet=>{  
                                return(
                                        <div>   <h6>{diet.name}</h6>
                                                <input type="checkbox" id={diet.name} name="diets" onChange={(e)=>handleCheckBox(e)}/>
                                                
                                        </div>
                                    )
                            
                                 
                            })
                        }

                 <div className={style.button}> 
                    <input type="submit" value="Create Recipe"/>
                </div> 
        



                </form>

    );
}

export default CreateRecipe;