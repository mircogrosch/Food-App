import axios from 'axios'; 
export const GET_RECIPES = "GET_RECIPES",GET_RECIPES_BY_QUERY="GET_RECIPES_BY_QUERY",GET_DIETS='GET_DIETS',FILTER_BY_DIETS='FILTER_BY_DIETS';

export const getRecipes=()=>{ 
    return async function(dispatch){ 
        const response = await axios.get('http://localhost:3001/recipes');
        dispatch({type:GET_RECIPES,payload:response.data})
    }
}
export const getRecipesByQuery=(payload)=>{ 
    return async function(dispatch){ 
        const response = await axios.get(`http://localhost:3001/recipes?name=${payload}`)
        dispatch({type:GET_RECIPES_BY_QUERY,payload:response.data})
    }
}

export const getDiets=()=> { 
    return async function(dispatch){ 
        const response = await axios.get('http://localhost:3001/types');
        dispatch({type:GET_DIETS, payload:response.data})
    }
} 

export const filterByDiets= (diet)=>{ 
    return {
        type: FILTER_BY_DIETS,payload: diet
    }
}