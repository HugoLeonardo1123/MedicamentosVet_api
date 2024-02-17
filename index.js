const express = require("express");
const mongoose = require("mongoose");
const Medic = require("./models/medic.js");
const app = express();
const jwt = require("jsonwebtoken");
const secretKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikh1Z28gTGVvbmFyZG8iLCJpYXQiOjE1MTYyMzkwMjJ9.BDx7Ai9eNuOpnYFktTXDQcoBO4ZbZur0030FVTgwXiI";

app.use(express.json());

//Rotas

//(GET) Pega todos os dados no banco de dados
app.get("/medics", async (req, res) => {
  const medics = await Medic.find();
  return res.status(200).json(medics);
});

//(POST) Adiciona dados no banco de dados
app.post("/medics", async (req, res) => {
  const medicData = req.body;
  try {
    const newMedic = await Medic.create(medicData);
    return res.json(newMedic);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao criar um novo medicamento." });
  }
});

//Deletar dados do banco de dados
app.delete("/medics/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMedic = await Medic.findByIdAndDelete(id);
    if (!deletedMedic) {
      return res.status(404).json({ message: "Medicamento não encontrado." });
    }
    return res
      .status(200)
      .json({ message: "Medicamento deletado com sucesso." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao deletar o medicamento." });
  }
});

// Recuperar uma informação especifica de um campo
app.get("/medics/:id/:campo", async (req, res) => {
  const { id, campo } = req.params;
  try {
    const medic = await Medic.findById(id);
    if (!medic) {
      return res.status(404).json({ message: "Médico não encontrado." });
    }
    const campoValue = medic[campo];
    if (!campoValue) {
      return res.status(404).json({ message: "Campo não encontrado." });
    }
    return res.status(200).json({ [campo]: campoValue });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar informação do campo." });
  }
});

// Middleware para verificar o token de acesso
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).json({ message: "Token de acesso não fornecido" });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Token de acesso inválido" });
    req.userId = decoded.id;
    next();
  });
}

// Rota para atualizar uma instância dos dados
app.put("/medics/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedMedic = await Medic.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!updatedMedic) {
      return res.status(404).json({ message: "Medicamento não encontrado." });
    }
    return res.status(200).json(updatedMedic);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar o medicamento." });
  }
});

//Conectar ao banco de dados

mongoose
  .connect(
    "mongodb+srv://hlv:senha123@cluster0.cvknrip.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Banco de dados conectado"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

app.listen(3000, () => {
  console.log("Servidor está ouvindo na porta 3000.");
});

