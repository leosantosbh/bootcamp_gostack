import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import BannerController from './app/controllers/BannerController';
import MettController from './app/controllers/MettController';
import AgendController from './app/controllers/AgendController';

import authMid from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMid);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/banners', upload.single('file'), BannerController.store);

routes.post('/metts', MettController.store);
routes.get('/metts', MettController.index);
routes.delete('/metts/:id', MettController.delete);

routes.get('/agends', AgendController.index);

routes.post('/agends/:id/subscribe', AgendController.store);

export default routes;
