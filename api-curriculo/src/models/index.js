
import Pessoa from "./Pessoa.js";
import ExperienciaAcademica from "./ExperienciaAcademica.js";
import ExperienciaProfissional from "./ExperienciaProfissional.js";
import Projeto from "./Projeto.js";
import Habilidade from "./Habilidade.js";

// Pessoa possui várias experiências acadêmicas
Pessoa.hasMany(ExperienciaAcademica, {
  foreignKey: "pessoaId",
  as: "experienciasAcademicas",
  onDelete: "CASCADE",
});

ExperienciaAcademica.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
  as: "pessoa",
});

// Pessoa possui várias experiências profissionais
Pessoa.hasMany(ExperienciaProfissional, {
  foreignKey: "pessoaId",
  as: "experienciasProfissionais",
  onDelete: "CASCADE",
});

ExperienciaProfissional.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
  as: "pessoa",
});

// Pessoa possui vários projetos
Pessoa.hasMany(Projeto, {
  foreignKey: "pessoaId",
  as: "projetos",
  onDelete: "CASCADE",
});

Projeto.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
  as: "pessoa",
});

// Pessoa possui várias habilidades
Pessoa.hasMany(Habilidade, {
  foreignKey: "pessoaId",
  as: "habilidades",
  onDelete: "CASCADE",
});

Habilidade.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
  as: "pessoa",
});

export {
  Pessoa,
  ExperienciaAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
};
