import React from "react";
import {Link} from 'react-router-dom'
import style from './Nav.module.css'
const Nav = () => { 
    return(
        <div> 
            <nav className={style.NavContainer}> 
               
               <Link to='/recipes'> <a>Home</a></Link>
                <Link to='/recipe'><a>Create Recipe</a></Link>
                <Link to='/favorites'><a>Favorites</a></Link>
               
            </nav>
            
            
           
        </div> 
    );
}


export default Nav;