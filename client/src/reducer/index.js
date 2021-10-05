import { GET_DIETS, GET_RECIPES,GET_RECIPES_BY_QUERY,FILTER_BY_DIETS } from "../actions";
const initialState = { 
    recipes:[],
    recipesSearch:[],
    diets:[],
    filterRecipes:[]
   }; 

const rootReducer = (state=initialState,action) => { 
        switch(action.type){ 
            case GET_RECIPES: 
            return { 
               ...state, recipes:action.payload,filterRecipes:action.payload
            }
            case GET_RECIPES_BY_QUERY:
                return { 
                   ...state, recipesSearch:action.payload
                }
            case GET_DIETS: 
                return { 
                   ...state, diets:action.payload
                }
            case FILTER_BY_DIETS:
                
                let newRecipes =[]; 
                state.recipes.forEach(diet=> {
                    if(diet.type_diets.includes(action.payload)){
                        newRecipes.push(diet)
                    }
                }) 
                return{ 
                  ...state,filterRecipes:newRecipes
                }
        default: return state;
        }
}

export default rootReducer;