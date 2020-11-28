'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tb_avaliacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tb_usuarios', key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
      },
      nr_nota: {
        type: Sequelize.INTEGER
      },
      id_tcnota: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tb_usuarios', key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
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