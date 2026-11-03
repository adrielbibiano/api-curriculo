import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import "./models/index.js";

import pessoaRoutes from "./routes/PessoaRoutes.js";
import experienciaAcademicaRoutes from "./routes/ExperienciaAcademicaRoutes.js";
import experienciaProfissionalRoutes from "./routes/ExperienciaProfissionalRoutes.js";
import projetoRoutes from "./routes/ProjetoRoutes.js";
import habilidadeRoutes from "./routes/HabilidadeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/pessoas", pessoaRoutes);
app.use("/", experienciaAcademicaRoutes);
app.use("/", experienciaProfissionalRoutes);
app.use("/", projetoRoutes);
app.use("/", habilidadeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API Currículo funcionando!",
    status: "online",
  });
});

// Conexão e sincronização com o banco
await sequelize.authenticate();
console.log("Conexão com PostgreSQL estabelecida!");

await sequelize.sync();
console.log("Tabelas sincronizadas com sucesso!");

export default app;