import './App.css';
import Landing from './components/Landing/Landing';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Landing}/> 
      <Route path='/recipes' component={Home}/>
    </div>
  );
}

export default App;
