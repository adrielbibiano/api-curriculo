
import { Projeto, Pessoa } from "../models/index.js";

// Listar projetos de uma pessoa
export const listarProjetos = async (req, res) => {
  try {
    const projetos = await Projeto.findAll({
      where: { pessoaId: req.params.pessoaId },
    });

    res.status(200).json(projetos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cadastrar projeto para uma pessoa
export const criarProjeto = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.pessoaId);

    if (!pessoa) {
      return res.status(404).json({
        message: "Pessoa não encontrada.",
      });
    }

    const projeto = await Projeto.create({
      ...req.body,
      pessoaId: pessoa.id,
    });

    res.status(201).json(projeto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Atualizar projeto
export const atualizarProjeto = async (req, res) => {
  try {
    const projeto = await Projeto.findOne({
      where: {
        id: req.params.projetoId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!projeto) {
      return res.status(404).json({
        message: "Projeto não encontrado.",
      });
    }

    await projeto.update(req.body);

    res.status(200).json(projeto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Excluir projeto
export const excluirProjeto = async (req, res) => {
  try {
    const projeto = await Projeto.findOne({
      where: {
        id: req.params.projetoId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!projeto) {
      return res.status(404).json({
        message: "Projeto não encontrado.",
      });
    }

    await projeto.destroy();

    res.status(200).json({
      message: "Projeto excluído com sucesso.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};