import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import "./models/index.js";
import pessoaRoutes from "./routes/PessoaRoutes.js";
import experienciaAcademicaRoutes from "./routes/ExperienciaAcademicaRoutes.js";
import experienciaProfissionalRoutes from "./routes/ExperienciaProfissionalRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/pessoas", pessoaRoutes);
app.use("/", experienciaAcademicaRoutes);
app.use("/", experienciaProfissionalRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API Currículo funcionando!",
    status: "online",
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com PostgreSQL estabelecida!");

    await sequelize.sync();
    console.log("Tabelas sincronizadas com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error.message);
    process.exit(1);
  }
};

startServer();