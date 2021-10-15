const axios = require("axios").default;
const { Recipe, Type_diets } = require('../../db.js');
require("dotenv").config();
const URL = " https://api.spoonacular.com/recipes";

//Consulta a la api
const callApi = async(name)=> { 
    let responseApi;
    if(name){
        responseApi = await axios.get(
            `${URL}/complexSearch?apiKey=${process.env.API_KEY}&titleMatch=${name}&addRecipeInformation=true&number=100`
          );
    } else{ 
        responseApi = await axios.get(
            `${URL}/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`
          );
    }

      //guardo info necesaria
      let responseApiData = [];
      let apiData = responseApi.data.results;
      apiData.forEach((el) => {
        let data = {
          id: el.id,
          name: el.title,
          image: el.image,
          type_diets: el.diets,
        };
        responseApiData.push(data);
      });

      return responseApiData;
} 

//consulta a la db
const callDb = async(name)=> { 
    let responseDb;
    if(name){ 
        responseDb = await Recipe.findAll({
            where: { name: name },
            include: {
              model: Type_diets,
              attributes: ["name"],
            },
          });
    } else{ 
        responseDb = await Recipe.findAll({
            include: {
              model: Type_diets,
              attributes: ["name"],
            },
          });
    }
    let responseDbData = [];
    let dbData = responseDb;
    dbData.forEach((el) => {
      let data = {
        id: el.id,
        name: el.name,
        type_diets: el.type_diets.map((diet) => diet.name),
        socore: el.score,
      };
      responseDbData.push(data);
    });

    return responseDbData;
} 

module.exports ={ 
    callApi,
    callDb
}