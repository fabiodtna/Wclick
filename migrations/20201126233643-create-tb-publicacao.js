'use strict';

const { sequelize } = require("../models/Tb_estado");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_publicacaos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Tb_usuarios',
          key: 'id'
        },
        allowNull:false,
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      nm_user: {
        type: Sequelize.STRING
      },
      nm_categoria:{
        type: Sequelize.STRING,
        allowNull:false
      },
      nm_descricao: {
        type: Sequelize.STRING,
        allowNull:false
      },
      nm_endereco:{
        type: Sequelize.STRING, 
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false, 
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_publicacaos');
  }
};