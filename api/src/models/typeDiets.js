const {DataTypes} = require('sequelize');

module.exports= (sequelize) => {
    sequelize.define('type_diets',{
        name: { 
            type: DataTypes.STRING
        }
    },{timestamps:false})
}