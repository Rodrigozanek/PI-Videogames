const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,//identificador unico aleatorio
      defaultValue: DataTypes.UUIDV4,//crea el id aleatorio conel algoritmo V4
      primaryKey: true//quedaria algo asi 123-f645-gus6
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,//no puede estar vacío
    },
    image: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false//no necesito la columna extra donde mustra la fecha de cracion.
 });
};
