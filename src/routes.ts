import express from 'express';
import knex from './database/connection';
import ItensController from './controllers/itensController';
import PointsController from './controllers/pointsController';

// index, show, create, uptade, delete

const routes = express.Router();
const itensController = new ItensController();
const pointsController = new PointsController();

routes.get('/items', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
