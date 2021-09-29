const express = require('express'); 
const axios = require('axios').default;
const router = express.Router(); 
const {Recipe} = require('../db.js'); 
require('dotenv').config()
const URL = ' https://api.spoonacular.com/recipes';

router.get("/", async(req,res)=> { 
    const {name} = req.query; 
      if(name) {   
        try { 
          //llamada a la api externa
            let responseApi = await axios.get(`${URL}/complexSearch?apiKey=${process.env.API_KEY}&titleMatch=${name}&addRecipeInformation=true&number=100`)
            //consulto a mi db  
              let responseDb = await Recipe.findAll({
                  where: {name:name},
              })
              //spread para unir las llamadas
              const responses = [...responseDb,responseApi.data.results]
          return res.json(responses);
            
        } catch(err){ 
            res.send(err)
        }
     } 

     //si no hay query 
     try{ 
        let response = await axios.get(`${URL}/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`); 
        res.json(response.data.results)
     } catch(err) { 
       res.send(err.message)
     }
    
   
});

router.get('/:idReceta',async(req,res)=> { 
    const {idReceta} = req.params; 
    if(idReceta){ //716426
      try{ 
            try{ 
              let responseApi = await axios.get(`${URL}/${idReceta}/information?apiKey=${process.env.API_KEY}`)
              
              const apiData = { 
                image:responseApi.data.image,
                title:responseApi.data.title,
                dishTypes: responseApi.data.dishTypes.map(type => type),
                diets: responseApi.data.diets.map(diet => diet),
                healthScore:responseApi.data.healthScore,
                score: responseApi.data.spoonacularScore,
                steps: responseApi.data.analyzedInstructions,
                resume: responseApi.data.summary
              }
              return res.json(apiData)
            } catch { 
              let responseDb= await Recipe.findByPk(idReceta);
                return res.json(responseDb)
            }

     }  
     catch(err){ 
       console.log("entro");
          res.send(err);
      } 
    } 
});
module.exports = router; 