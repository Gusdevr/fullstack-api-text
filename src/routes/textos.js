const express = require("express");
const router = express.Router();
const Texto = require("../models/Texto");

// Cadastrar texto
router.post("/", async (req, res) => {
  try {
    const texto = await Texto.create({ conteudo: req.body.conteudo });
    res.json(texto);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao salvar texto." });
  }
});

// Listar textos
router.get("/", async (req, res) => {
  try {
    const textos = await Texto.findAll();
    res.json(textos);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar textos." });
  }
});

module.exports = router;
