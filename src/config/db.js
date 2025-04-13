const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // <- importante
    dialect: "mysql",
    dialectOptions: {
      ssl: false, // pode ser necessário colocar isso como `true` em casos com SSL obrigatório
    },
    logging: false, // remove logs SQL se quiser
  }
);

module.exports = sequelize;
