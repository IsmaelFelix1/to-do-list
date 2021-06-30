import{Router} from'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.createUser);

routes.post('/sessions', SessionController.session);

export default routes;