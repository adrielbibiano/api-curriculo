
import { ExperienciaProfissional, Pessoa } from "../models/index.js";

export const listarExperienciasProfissionais = async (req, res) => {
  try {
    const experiencias = await ExperienciaProfissional.findAll({
      where: { pessoaId: req.params.pessoaId },
    });

    res.status(200).json(experiencias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const criarExperienciaProfissional = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.pessoaId);

    if (!pessoa) {
      return res.status(404).json({
        message: "Pessoa não encontrada.",
      });
    }

    const experiencia = await ExperienciaProfissional.create({
      ...req.body,
      pessoaId: pessoa.id,
    });

    res.status(201).json(experiencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Atualizar experiência profissional
export const atualizarExperienciaProfissional = async (req, res) => {
  try {
    const experiencia = await ExperienciaProfissional.findOne({
      where: {
        id: req.params.experienciaId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!experiencia) {
      return res.status(404).json({
        message: "Experiência profissional não encontrada.",
      });
    }

    await experiencia.update(req.body);

    res.status(200).json(experiencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Excluir experiência profissional
export const excluirExperienciaProfissional = async (req, res) => {
  try {
    const experiencia = await ExperienciaProfissional.findOne({
      where: {
        id: req.params.experienciaId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!experiencia) {
      return res.status(404).json({
        message: "Experiência profissional não encontrada.",
      });
    }

    await experiencia.destroy();

    res.status(200).json({
      message: "Experiência profissional excluída com sucesso.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};