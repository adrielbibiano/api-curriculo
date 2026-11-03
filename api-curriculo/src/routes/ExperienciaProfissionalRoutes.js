import { Router } from "express";

import {
  listarExperienciasProfissionais,
  criarExperienciaProfissional,
  atualizarExperienciaProfissional,
  excluirExperienciaProfissional,
} from "../controllers/ExperienciaProfissionalController.js";

const router = Router();

router.get(
  "/pessoas/:pessoaId/experiencias-profissionais",
  listarExperienciasProfissionais
);

router.post(
  "/pessoas/:pessoaId/experiencias-profissionais",
  criarExperienciaProfissional
);

router.put(
  "/pessoas/:pessoaId/experiencias-profissionais/:experienciaId",
  atualizarExperienciaProfissional
);

router.delete(
  "/pessoas/:pessoaId/experiencias-profissionais/:experienciaId",
  excluirExperienciaProfissional
);

export default router;