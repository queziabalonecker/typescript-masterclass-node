import express from 'express';
import users from './controllers/usersControllers';

const routes = express();

routes.get('/users', users.index);
routes.get('/users/create', users.create);

export default routes;
