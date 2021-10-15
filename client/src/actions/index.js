import axios from 'axios'; 
export const GET_RECIPES = "GET_RECIPES",
GET_RECIPES_BY_QUERY="GET_RECIPES_BY_QUERY",
GET_DIETS='GET_DIETS',
FILTER_BY_DIETS='FILTER_BY_DIETS',
SORT_BY="SORT_BY",
GET_DETAIL="GET_DETAIL",
RESET_DETAIL="RESET_DETAIL",
SET_LOADING= "SET_LOADING",
SAVE_MY_RECIPE="SAVE_MY_RECIPE";
const URL = `http://localhost:3001`;

export const getRecipes=()=>{ 
    return async function(dispatch){ 
        const response = await axios.get(`${URL}/recipes`);
        dispatch({type:GET_RECIPES,payload:response.data})
    }
}
export const getRecipesByQuery=(wordSearch)=>{ 
    return async function(dispatch){ 
        const response = await axios.get(`${URL}/recipes?name=${wordSearch}`)
        dispatch({type:GET_RECIPES_BY_QUERY,payload:response.data})
    }
}

export const getDiets=()=> { 
    return async function(dispatch){ 
        const response = await axios.get(`${URL}/types`);
        dispatch({type:GET_DIETS, payload:response.data})
    }
} 
export const getDetail=(id)=>{
    return async function(dispatch){ 
        const response= await axios.get(`${URL}/recipes/${id}`);
        dispatch({type:GET_DETAIL,payload:response.data});
    }
}
export const saveMyRecipe = (newDiet)=>{ 
    return async function(dispatch) {
        const response = await axios.post("http://localhost:3001/recipe", newDiet);
        newDiet.id=response.data.id
        dispatch({type:SAVE_MY_RECIPE, payload:newDiet})
        alert(response.data.message);
    }
    
}
export const filterByDiets= (diet)=>{ 
    return {
        type: FILTER_BY_DIETS,payload: diet
    }
}
export const sortBy=(optionSort)=>{
    
    return{ 
        type: SORT_BY, payload:optionSort
    }

}
export const resetDetail=()=>{
    return {
        type:RESET_DETAIL
    }
}
export const setLoading= (boolean)=>{ 
    return{ 
        type:SET_LOADING,payload:boolean
    }
}