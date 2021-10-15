const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: { 
      type: DataTypes.TEXT, 
      allowNull: false
    },
    score: { 
      type: DataTypes.DOUBLE, 
    }, 
    health_score:{ 
      type:DataTypes.DOUBLE,
      
    },
    steps: { 
      type: DataTypes.TEXT
    },
    time: { 
      type: DataTypes.DOUBLE
    },
    image:{ 
      type: DataTypes.STRING
    }
  }, {timestamps:false});
};
