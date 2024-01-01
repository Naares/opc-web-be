import express from 'express';
import { getServerLifeCheck } from './getServerLifeCheck';
import { getOpcConnection} from './getOpcConnection';

export const routes = express.Router();

routes.use(getServerLifeCheck);
routes.use(getOpcConnection);