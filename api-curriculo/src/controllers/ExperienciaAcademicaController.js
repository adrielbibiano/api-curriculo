
import { ExperienciaAcademica, Pessoa } from "../models/index.js";

export const listarExperienciasAcademicas = async (req, res) => {
  try {
    const experiencias = await ExperienciaAcademica.findAll({
      where: { pessoaId: req.params.pessoaId },
    });

    res.status(200).json(experiencias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const criarExperienciaAcademica = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.pessoaId);

    if (!pessoa) {
      return res.status(404).json({
        message: "Pessoa não encontrada.",
      });
    }

    const experiencia = await ExperienciaAcademica.create({
      ...req.body,
      pessoaId: pessoa.id,
    });

    res.status(201).json(experiencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Atualizar experiência acadêmica
export const atualizarExperienciaAcademica = async (req, res) => {
  try {
    const experiencia = await ExperienciaAcademica.findOne({
      where: {
        id: req.params.experienciaId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!experiencia) {
      return res.status(404).json({
        message: "Experiência acadêmica não encontrada.",
      });
    }

    await experiencia.update(req.body);

    res.status(200).json(experiencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Excluir experiência acadêmica
export const excluirExperienciaAcademica = async (req, res) => {
  try {
    const experiencia = await ExperienciaAcademica.findOne({
      where: {
        id: req.params.experienciaId,
        pessoaId: req.params.pessoaId,
      },
    });

    if (!experiencia) {
      return res.status(404).json({
        message: "Experiência acadêmica não encontrada.",
      });
    }

    await experiencia.destroy();

    res.status(200).json({
      message: "Experiência acadêmica excluída com sucesso.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};