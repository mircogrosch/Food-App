import './App.css';
import Landing from './components/Landing/Landing';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/> 
      <Nav/>
      <Route path='/recipes' component={Home}/>
      <Route path='/recipe' component={CreateRecipe}/>
    </div>
  );
}

export default App;
