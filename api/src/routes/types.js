const express = require('express'); 
const {Type_diets} = require('../db.js'); 
const router = express.Router(); 

router.get('/', async(req,res)=>{
    const diets = ["gluten free","ketogenic","vegetarian","lacto ovo vegetarian","vegan","pescatarian","paleolithic","primal","fodmap friendly","whole 30","dairy free"];
    
    diets.forEach(diet => Type_diets.findOrCreate({where:{name:diet}}))
   
    const responseDb= await Type_diets.findAll();
    return res.json(responseDb);
})
module.exports = router; 