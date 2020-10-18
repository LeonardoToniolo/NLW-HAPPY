import { Router } from 'express';
import multer from 'multer';

import OrphanagesControllers from './controller/orphanagesController';
import UserControllers from './controller/usersController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages',upload.array('images'),OrphanagesControllers.create);

routes.post('/users',UserControllers.create);

export default routes;