
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Habilidade = sequelize.define(
  "Habilidade",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nivel: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "habilidades",
    timestamps: true,
  }
);

export default Habilidade;
