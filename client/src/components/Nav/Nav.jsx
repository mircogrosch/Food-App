import React from "react";
import {Link} from 'react-router-dom'
import style from './Nav.module.css'
const Nav = () => { 
    return(
        <div> 
            <nav className={style.NavContainer}> 
               <ul>  
               <Link to='/recipes' className={style.link}> <li>Home</li></Link>
                <Link to='/recipe' className={style.link}><li>Create Recipe</li></Link>
                <Link to='/favorites' className={style.link}><li>Favorites</li></Link>
                </ul>
            </nav>
            
            
           
        </div> 
    );
}


export default Nav;