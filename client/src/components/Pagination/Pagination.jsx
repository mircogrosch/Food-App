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
                    <li key={number}> 
                        <span  onClick={()=> pagination(number)}> {number}</span>
                    </li>
                ))
             
             }
        </ul>
    </nav>
);
}

export default Pagination;