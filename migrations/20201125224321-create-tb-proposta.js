'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tb_proposta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pub: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tb_publicacaos', key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tb_usuarios', key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
      },
      vl_proposta: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      nm_mensage: {
        type: Sequelize.STRING
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
  
  }
};
