const express = require('express'); 
const axios = require('axios').default;
const router = express.Router(); 
const {Recipe,Type_diets} = require('../db.js'); 
require('dotenv').config()
const URL = ' https://api.spoonacular.com/recipes';

router.get("/", async(req,res)=> { 
    const {name} = req.query; 
      if(name) {   
        try { 
          //llamada a la api externa
            let responseApi = await axios.get(`${URL}/complexSearch?apiKey=${process.env.API_KEY}&titleMatch=${name}&addRecipeInformation=true&number=100`)
        //guardo info necesaria
        let responseApiData= []
        let apiData= responseApi.data.results
        apiData.forEach(el => { 
          let data = { 
            id:el.id,
            name: el.title,
            image:el.image,
            type_diets: el.diets
          }
           responseApiData.push(data)
        })
            //consulto a mi db  
              let responseDb = await Recipe.findAll({
                  where: {name:name},
                  include:{ 
                    model: Type_diets,
                    attributes:['name'],
                  },
              })
              //spread para unir las llamadas
              const responses = [...responseDb,responseApiData].flat()
          return res.json(responses);
            
        } catch(err){ 
            res.send(err)
        }
     } 

     //si no hay query 
     try{ 
        let responseApi = await axios.get(`${URL}/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`); 
        
        //guardo info necesaria 
         let responseApiData= []
        let apiData= responseApi.data.results
        apiData.forEach(el => { 
          let data = { 
            id:el.id,
            name: el.title,
            image:el.image,
            type_diets: el.diets,
          }
           responseApiData.push(data)
        })
        
        //consulto a mi db
        let responseDb = await Recipe.findAll({ include:{ 
          model: Type_diets,
          attributes:['name']
        }});
        //guardo info necesaria
        let responseDbData = []
        let dbData= responseDb
        dbData.forEach((el)=>{ 
          let data= {
          id:el.id,
          name:el.name,
          type_diets: el.type_diets.map(diet => diet.name),
        }
        responseDbData.push(data)
        })
        
        let responses= [...responseDbData,responseApiData].flat();

        res.json(responses)

     } catch(err) { 
       res.send(err.message)
     }
    
   
});

router.get('/:idReceta',async(req,res)=> { 
    const {idReceta} = req.params; 
    if(idReceta){ //716426
      try{ 
            try{ 
              //llamada a la api externa
              let responseApi = await axios.get(`${URL}/${idReceta}/information?apiKey=${process.env.API_KEY}`)
              //si no es rechazada guardo los datos necesarios
              const apiData = { 
                image:responseApi.data.image,
                name:responseApi.data.title,
                dishTypes: responseApi.data.dishTypes.map(type => type),
                diets: responseApi.data.diets.map(diet => diet),
                health_score:responseApi.data.healthScore,
                score: responseApi.data.spoonacularScore,
                steps: responseApi.data.analyzedInstructions,
                resume: responseApi.data.summary
              }
              return res.json(apiData)
            } catch { 
              //si no encuentra el id en la api externa lo busca en la db
              let responseDb= await Recipe.findByPk(idReceta);
                return res.json(responseDb)
            }

     }  
     catch(err){ 
      
          res.send(err);
      } 
    } 
});
module.exports = router; 