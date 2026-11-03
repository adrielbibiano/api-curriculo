import { Habilidade, Pessoa } from "../models/index.js";

// Listar habilidades de uma pessoa
export const listarHabilidades = async (req, res) => {
  try {
    const habilidades = await Habilidade.findAll({
      where: { pessoaId: req.params.pessoaId },
    });

    res.status(200).json(habilidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cadastrar habilidade para uma pessoa
export const criarHabilidade = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.pessoaId);

    if (!pessoa) {
      return res.status(404).json({
        message: "Pessoa não encontrada.",
      });
    }

    const habilidade = await Habilidade.create({
      ...req.body,
      pessoaId: pessoa.id,
    });

    res.status(201).json(habilidade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  
};
// Atualizar habilidade
export const atualizarHabilidade = async (req, res) => {
  try {
    const habilidade = await Habilidade.findOne({
      where: {
        id: req.params.habilidadeId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!habilidade) {
      return res.status(404).json({
        message: "Habilidade não encontrada.",
      });
    }

    await habilidade.update(req.body);

    res.status(200).json(habilidade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Excluir habilidade
export const excluirHabilidade = async (req, res) => {
  try {
    const habilidade = await Habilidade.findOne({
      where: {
        id: req.params.habilidadeId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!habilidade) {
      return res.status(404).json({
        message: "Habilidade não encontrada.",
      });
    }

    await habilidade.destroy();

    res.status(200).json({
      message: "Habilidade excluída com sucesso.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};