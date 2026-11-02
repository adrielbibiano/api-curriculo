
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Projeto = sequelize.define(
  "Projeto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tecnologias: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    repositorio: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "projetos",
    timestamps: true,
  }
);

export default Projeto;
