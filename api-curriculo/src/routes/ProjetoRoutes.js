import { Router } from "express";
import {
  listarProjetos,
  criarProjeto,
  atualizarProjeto,
  excluirProjeto,
} from "../controllers/ProjetoController.js";

const router = Router();

router.get("/pessoas/:pessoaId/projetos", listarProjetos);
router.post("/pessoas/:pessoaId/projetos", criarProjeto);
router.put(
  "/pessoas/:pessoaId/projetos/:projetoId",
  atualizarProjeto
);

router.delete(
  "/pessoas/:pessoaId/projetos/:projetoId",
  excluirProjeto
);

export default router;