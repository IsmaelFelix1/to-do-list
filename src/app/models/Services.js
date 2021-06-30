import Sequelize, {Model } from 'sequelize';
class Services extends Model{
 static init(sequelize){
     super.init(
         {
             services: Sequelize.STRING,
             check: Sequelize.BOOLEAN,
         },
         {
             sequelize,
         }
     );
     return this;
 }

 static associate(models) {
     this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
 }

}

export default Services;