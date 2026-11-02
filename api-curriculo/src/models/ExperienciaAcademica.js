
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ExperienciaAcademica = sequelize.define(
  "ExperienciaAcademica",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    instituicao: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    curso: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    grau: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    dataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dataConclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    emAndamento: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "experiencias_academicas",
    timestamps: true,
  }
);

export default ExperienciaAcademica;
