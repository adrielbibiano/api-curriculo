
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Pessoa = sequelize.define(
  "Pessoa",
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
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    resumo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    portfolio: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "pessoas",
    timestamps: true,
  }
);

export default Pessoa;
