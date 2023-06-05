const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('genre', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,//valido que no se repita
      },
      name: {
        type: DataTypes.STRING
      }
    }, {
      timestamps: false//no necesito la columna extra donde mustra la fecha de cracion.
   })
};