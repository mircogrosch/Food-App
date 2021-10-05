import React from 'react'; 
import style from './Pagination.module.css'
const Pagination = ({pagination, allRecipe, foodPerPage})=> { 
 const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allRecipe/foodPerPage);i++){
         pageNumbers.push(i)
    }
return (
    <nav > 
        <ul className={style.container}> 
             {pageNumbers && 
                pageNumbers.map(number => (
                    <li> 
                        <a key={number} onClick={()=> pagination(number)}> {number}</a>
                    </li>
                ))
             
             }
        </ul>
    </nav>
);
}

export default Pagination;