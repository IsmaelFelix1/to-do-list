import{Router} from'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import TasksController from './app/controllers/TasksController';

const routes = new Router();

routes.post('/users', UserController.createUser);
routes.put('/users',authMiddleware, UserController.updateUser);
routes.post('/sessions', SessionController.session);
routes.post('/tasks',authMiddleware ,TasksController.store);
routes.get('/tasks',authMiddleware ,TasksController.index);
routes.put('/tasks/:task_id', authMiddleware, TasksController.update);
routes.delete('/tasks/:task_id', authMiddleware, TasksController.delete);
export default routes;