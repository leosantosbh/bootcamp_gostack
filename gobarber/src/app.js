import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
   constructor() {
      this.server = express();

      this.middlewares();
      this.routes();
   }

   middlewares() {
      this.server.use(express.json());
      // rota atributo estático para a rota files e ir até a imagem passada pelo retorno do usuário
      this.server.use(
         '/files',
         express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
      );
   }

   routes() {
      this.server.use(routes);
   }
}

export default new App().server;
