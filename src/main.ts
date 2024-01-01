import express, { Express, Request, Response } from "express";
import { routes } from './routes/main';
import bodyParser from 'body-parser';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/',routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});