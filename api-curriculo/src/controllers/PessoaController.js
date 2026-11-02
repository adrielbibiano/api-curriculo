
import {
  Pessoa,
  ExperienciaAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
} from "../models/index.js";

// Listar todas as pessoas
export const listarPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll({
      include: [
        { model: ExperienciaAcademica, as: "experienciasAcademicas" },
        { model: ExperienciaProfissional, as: "experienciasProfissionais" },
        { model: Projeto, as: "projetos" },
        { model: Habilidade, as: "habilidades" },
      ],
    });

    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar pessoa por ID
export const buscarPessoaPorId = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id, {
      include: [
        { model: ExperienciaAcademica, as: "experienciasAcademicas" },
        { model: ExperienciaProfissional, as: "experienciasProfissionais" },
        { model: Projeto, as: "projetos" },
        { model: Habilidade, as: "habilidades" },
      ],
    });

    if (!pessoa) {
      return res.status(404).json({ mensagem: "Pessoa não encontrada." });
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Cadastrar pessoa
export const criarPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);

    res.status(201).json({
      mensagem: "Pessoa cadastrada com sucesso!",
      pessoa,
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Atualizar pessoa
export const atualizarPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if (!pessoa) {
      return res.status(404).json({ mensagem: "Pessoa não encontrada." });
    }

    await pessoa.update(req.body);

    res.status(200).json({
      mensagem: "Pessoa atualizada com sucesso!",
      pessoa,
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Excluir pessoa
export const excluirPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if (!pessoa) {
      return res.status(404).json({ mensagem: "Pessoa não encontrada." });
    }

    await pessoa.destroy();

    res.status(200).json({
      mensagem: "Pessoa excluída com sucesso!",
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
