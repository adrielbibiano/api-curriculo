
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
