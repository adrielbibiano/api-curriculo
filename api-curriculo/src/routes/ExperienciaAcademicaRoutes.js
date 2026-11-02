
import express from "express";

import {
  listarExperienciasAcademicas,
  criarExperienciaAcademica,
} from "../controllers/ExperienciaAcademicaController.js";

const router = express.Router();

// Listar experiências acadêmicas de uma pessoa
router.get(
  "/pessoas/:pessoaId/experiencias-academicas",
  listarExperienciasAcademicas
);

// Cadastrar experiência acadêmica para uma pessoa
router.post(
  "/pessoas/:pessoaId/experiencias-academicas",
  criarExperienciaAcademica
);

export default router;
