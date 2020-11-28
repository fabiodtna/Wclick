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
        type: Sequelize.STRING
      },
      nm_sobrenome: {
        type: Sequelize.STRING
      },
      dt_nascimento: {
        type: Sequelize.STRING
      },
      nm_email: {
        type: Sequelize.STRING
      },
      nm_senha: {
        type: Sequelize.STRING
      },
      id_cl_tc: {
        type: Sequelize.INTEGER
      },
      nr_cpf: {
        type: Sequelize.INTEGER
      },
      nm_descricao: {
        type: Sequelize.STRING
      },
      nr_telefone: {
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


