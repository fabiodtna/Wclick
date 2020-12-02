'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tb_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cidade: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tb_cidades', key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
      },
      nm_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nm_sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dt_nascimento: {
        type: Sequelize.STRING
      },
      nm_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nm_senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_cl_tc: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nm_descricao: {
        type: Sequelize.STRING
      },
      nr_telefone: {
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


