'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('services', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey:true,
       },
       services: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       check: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
       },
       user_id: {
         type: Sequelize.INTEGER,
         references: {model: 'users', key: 'id'},
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
         allowNull: false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false
       }
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    
     return await queryInterface.dropTable('services');
  }
};