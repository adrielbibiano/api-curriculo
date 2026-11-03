import { Router } from "express";

import {
  listarHabilidades,
  criarHabilidade,
  atualizarHabilidade,
  excluirHabilidade,
} from "../controllers/HabilidadeController.js";

const router = Router();

router.get("/pessoas/:pessoaId/habilidades", listarHabilidades);
router.post("/pessoas/:pessoaId/habilidades", criarHabilidade);

router.put(
  "/pessoas/:pessoaId/habilidades/:habilidadeId",
  atualizarHabilidade
);

router.delete(
  "/pessoas/:pessoaId/habilidades/:habilidadeId",
  excluirHabilidade
);

export default router;

