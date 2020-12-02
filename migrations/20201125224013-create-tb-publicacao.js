'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tb_publicacaos', {
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
        allowNull: false,
      },
      nm_publicação: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nm_descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nm_endereco:{
        type: Sequelize.STRING,
        allowNull: false,
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