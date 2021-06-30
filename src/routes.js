import{Router} from'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import TasksController from './app/controllers/TasksController';

const routes = new Router();

routes.post('/users', UserController.createUser);
routes.put('/users',authMiddleware, UserController.updateUser);
routes.post('/sessions', SessionController.session);
routes.post('/services',authMiddleware ,TasksController.store);
routes.get('/services',authMiddleware ,TasksController.index);
export default routes;