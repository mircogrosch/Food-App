const express = require('express'); 
const {Type_diets} = require('../db.js'); 
const router = express.Router(); 

router.get('/', async(req,res)=>{
    const diets = ["gluten free","ketogenic","vegetarian","lacto vegetarian","ovo vegetarian","vegan","pescetarian","paleolithic","primal","low fodmap","whole30"];
    
    diets.forEach(diet => Type_diets.findOrCreate({where:{name:diet}}))
   
    const responseDb= await Type_diets.findAll();
    return res.json(responseDb);
})
module.exports = router; 