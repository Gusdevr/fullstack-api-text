const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const Texto = require("./models/Texto");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const textosRouter = require("./routes/textos");
app.use("/api/textos", textosRouter);

sequelize.sync().then(() => {
  console.log("Banco sincronizado.");
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
});
