const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Texto = sequelize.define("Texto", {
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Texto;
