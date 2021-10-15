import './App.css';
import Landing from './components/Landing/Landing';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import MyRecipes from './components/MyRecipes/MyRecipes';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/> 
      <Route path='/detail/:id' component={RecipeDetail}/>
      <Route path='/recipes' component={Home}/>
      <Route path='/recipe' component={CreateRecipe}/>
      <Route path='/myRecipes' component={MyRecipes} />
      
    </div>
  );
}

export default App;
