import React from 'react'; 
import {Link} from 'react-router-dom'
import style from'./Landing.module.css'
 
const Landing = () => { 
    return (
        <div className={style.image}>
            <div className={style.containerBtn}> 
            <Link to='/recipes' className={style.link}><button id={style.btn}>Start Now</button></Link>
            </div>
           
        </div> 
    ); 
} 
export default Landing;