import { GET_DIETS, GET_RECIPES,GET_RECIPES_BY_QUERY,FILTER_BY_DIETS,SORT_BY,GET_DETAIL,RESET_DETAIL, SET_LOADING,SAVE_MY_RECIPE } from "../actions";
const initialState = { 
    recipes:[],
    diets:[],
    currentRecipes:[],
    recipeDetail:{},
    loading : true,
    myRecipes:[]
   }; 

const rootReducer = (state=initialState,action) => { 
        switch(action.type){ 
            case GET_RECIPES: 
            return { 
               ...state, 
               recipes:action.payload,
               currentRecipes:action.payload
            }
            case GET_RECIPES_BY_QUERY:
                if(!action.payload.length){ 
                    return {
                        ...state, currentRecipes:"SORRY WE CAN'T FOUND RESULTS "}
                }else{ 
                    return { 
                        ...state, currentRecipes:action.payload
                     }
                }
                
            case GET_DIETS: 
                return { 
                   ...state, diets:action.payload
                }
            case GET_DETAIL:
                return { 
                   ...state, recipeDetail:action.payload
                }
            case SAVE_MY_RECIPE:
                return { 
                    ...state, myRecipes:[...state.myRecipes,action.payload]
                }
            case RESET_DETAIL:
                return{
                    ...state,recipeDetail:{}
                }
            case FILTER_BY_DIETS:
                let newRecipes =[]; 
                if(action.payload === "all"){
                    return{
                        ...state,currentRecipes:state.recipes
                    }
                }
                state.recipes.forEach(diet=> {
                    if(diet.type_diets.includes(action.payload)){
                        newRecipes.push(diet)
                    }
                }) 
                return{ 
                  ...state,currentRecipes:newRecipes
                }
            case SORT_BY: 
                
                let sorted = [...state.currentRecipes];
                let optionSort = { 
                    "a-z": function(a,b){ return new Intl.Collator().compare(a.name,b.name)},//equivale a localCompare pero para grandes matrices
                    "z-a": function(a,b){ return new Intl.Collator().compare(b.name,a.name)},
                    "0-100":function(a,b){return a.score - b.score},
                    "100-0":function(a,b){return b.score - a.score},
                } 
                sorted.sort((a,b)=>optionSort[action.payload](a,b))
                
                return{ 
                    ...state, currentRecipes:sorted
                }
            case SET_LOADING: 
                    return {
                        ...state,loading:action.payload
                    }
            

        default: return state;
        }
}

export default rootReducer;