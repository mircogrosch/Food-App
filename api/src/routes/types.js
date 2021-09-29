const express = require('express'); 
const {Type_diets} = require('../db.js'); 
const router = express.Router(); 

router.get('/', async(req,res)=>{
    const responseDb= await Type_diets.findAll();
    return res.json(responseDb);
})
module.exports = router; 