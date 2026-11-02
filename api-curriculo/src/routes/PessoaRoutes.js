
import { Router } from "express";

import {
  listarPessoas,
  buscarPessoaPorId,
  criarPessoa,
  atualizarPessoa,
  excluirPessoa,
} from "../controllers/PessoaController.js";

const router = Router();

// GET - Listar todas as pessoas
router.get("/", listarPessoas);

// GET - Buscar pessoa por ID
router.get("/:id", buscarPessoaPorId);

// POST - Cadastrar pessoa
router.post("/", criarPessoa);

// PUT - Atualizar pessoa
router.put("/:id", atualizarPessoa);

// DELETE - Excluir pessoa
router.delete("/:id", excluirPessoa);

export default router;
