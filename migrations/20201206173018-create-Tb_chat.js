'use strict';

const { sequelize } = require("../models/Tb_estado");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('tb_chats', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull:false,
      },
      id_user:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      id_usert:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      nm_user:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      nm_descpost:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      nm_mensagem:{
        type: Sequelize.STRING,
        allowNull:false,
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
