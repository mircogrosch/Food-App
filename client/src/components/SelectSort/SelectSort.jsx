import React from 'react'; 
import { useDispatch} from 'react-redux';
import { sortBy } from '../../actions';
import style from './SelectSort.module.css'
const SelectSort = ()=> { 
    const dispatch = useDispatch();
    const optionSort = ["a-z","z-a","0-100","100-0"]; 
    return (    
        <select name="SORT" defaultValue="select" onChange={(e)=>dispatch(sortBy(e.target.value))} className={style.container}>
             <option key="sort" hidden  defaultValue="sort" className={style.option}>SORT</option> 
            {
                optionSort.map((option)=>{
                    return <option key={option} value={option} className={style.option}>{option.toUpperCase()}</option>
                })
            }
        </select>
    ); 
}

export default SelectSort;