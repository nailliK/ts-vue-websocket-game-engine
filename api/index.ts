import express, {Express} from "express";
import SocketServer from "./services/SocketServer";
import {Server} from "http";

const server = (app: Express, http: Server) => {
	app.use(express.json());

	// app.get("/foo", (req, res) => {
	// 	res.json({msg: "foo"});
	// });
	//
	// app.post("/bar", (req: Request, res: Response) => {
	// 	res.json(req.body);
	// });

	const socketServer = new SocketServer(http);
};

export default server;
