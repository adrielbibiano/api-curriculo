import { Router } from "express";

import {
  listarExperienciasAcademicas,
  criarExperienciaAcademica,
  atualizarExperienciaAcademica,
  excluirExperienciaAcademica,
} from "../controllers/ExperienciaAcademicaController.js";

const router = Router();

router.get(
  "/pessoas/:pessoaId/experiencias-academicas",
  listarExperienciasAcademicas
);

router.post(
  "/pessoas/:pessoaId/experiencias-academicas",
  criarExperienciaAcademica
);

router.put(
  "/pessoas/:pessoaId/experiencias-academicas/:experienciaId",
  atualizarExperienciaAcademica
);

router.delete(
  "/pessoas/:pessoaId/experiencias-academicas/:experienciaId",
  excluirExperienciaAcademica
);

export default router;