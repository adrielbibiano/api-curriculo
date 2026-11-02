
import express from "express";

import {
  listarExperienciasProfissionais,
  criarExperienciaProfissional,
} from "../controllers/ExperienciaProfissionalController.js";

const router = express.Router();

// Listar experiências profissionais de uma pessoa
router.get(
  "/pessoas/:pessoaId/experiencias-profissionais",
  listarExperienciasProfissionais
);

// Cadastrar experiência profissional para uma pessoa
router.post(
  "/pessoas/:pessoaId/experiencias-profissionais",
  criarExperienciaProfissional
);

export default router;
