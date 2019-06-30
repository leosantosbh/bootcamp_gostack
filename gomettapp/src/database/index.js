import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Banner from '../app/models/Banner';
import Mettup from '../app/models/Mett';
import Agend from '../app/models/Agend';

import databaseConfig from '../config/database';

const models = [User, File, Banner, Mettup, Agend];

class Database {
   constructor() {
      this.connection = new Sequelize(databaseConfig);
      this.init();
      this.associate();
   }

   init() {
      models.forEach(model => model.init(this.connection));
   }

   associate() {
      models.forEach(model => {
         if (model.associate) {
            model.associate(this.connection.models);
         }
      });
   }
}

export default new Database();
