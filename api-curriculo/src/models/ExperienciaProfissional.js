
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ExperienciaProfissional = sequelize.define(
  "ExperienciaProfissional",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empresa: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dataFim: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    atual: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "experiencias_profissionais",
    timestamps: true,
  }
);

export default ExperienciaProfissional;
