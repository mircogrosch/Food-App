const express = require('express'); 
const {Recipe,Type_diets} = require('../db.js'); 
const router = express.Router(); 
router.post("/", async(req,res)=>{ 
    const {name,resume,score,health_score,steps,diets,time,image} = req.body;
    parseInt(score);
    parseInt(health_score)
    parseInt(time)
    try{ 
        //crea la receta 
        let recipeCreated = await Recipe.create({name,resume,score,health_score,steps,time,image});  
        
        //busco los tipos de dietas para poder asociarlos con recipe
        let newDietsLower = diets.map(diet => diet.toLowerCase()) 
        
         let typeDietDb = await Type_diets.findAll({
             where: { name: newDietsLower}
         })
         let id = recipeCreated.id; 
        //asocio los tipos de dietas a recipe *addTypes_diets se crea cuando se realiza la relacion*
          recipeCreated.addType_diets(typeDietDb);
          return res.json({message:"Recipe created successfully",id:id})
    }catch(err){ 
        res.send(err.message)   
    }
    
});
module.exports = router; 