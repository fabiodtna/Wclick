'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tb_categoria', {
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
      nm_categoria: {
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