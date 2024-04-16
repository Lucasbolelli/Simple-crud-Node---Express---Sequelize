import './database';
import express from 'express';
import router from "./route/UserRoute";


const app = express();

export class App {
	constructor() {
		this.server = express();

		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
		
	}

	routes() {
		app.use(router)
	}
}

export default new App().server;
