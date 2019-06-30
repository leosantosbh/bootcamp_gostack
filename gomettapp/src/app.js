import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
   constructor() {
      const dir_image = express.static(
         path.resolve(__dirname, '..', 'temp', 'uploads')
      );

      this.server = express();

      this.server.use(express.json());
      // rota atributo estático para a rota files e ir até a imagem passada pelo retorno do usuário
      this.server.use('/banners', dir_image);

      // rota atributo estático para a rota files e ir até a imagem passada pelo retorno do usuário
      this.server.use('/files', dir_image);

      this.server.use(routes);
   }
}

export default new App().server;
