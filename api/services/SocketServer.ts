import * as SocketIO from "socket.io";
import * as Http from "http";
import SocketPackage from "@/interfaces/SocketPackage";
import LooseObject from "@/interfaces/LooseObject";
import SocketClient from "../../shared/interfaces/SocketClient";

class SocketServer {
	private io: SocketIO.Server;
	private rooms: LooseObject;
	private clients: Array<SocketClient> = [];

	constructor(server: Http.Server) {
		this.io = SocketIO.listen(server);
		this.rooms = this.io.sockets.adapter.rooms;

		this.io.on("connection", (client: SocketIO.Socket) => {

			this.clients.push(<SocketClient>{
				id: client.id,
				name: ""
			});

			client.on("request", (data) => {
				this.parseRequest(data, client);
			});

			client.on("message", (data) => {
				this.parseMessage(data, client);
			});

			this.emitMessage(<SocketPackage>{
				from: "server",
				status: 200,
				message: "Welcome!"
			}, client);
		});
	}

	parseMessage(message: SocketPackage, client: SocketIO.Socket): void {
		console.log("Parsing Message...", message);
	}

	parseRequest(request: SocketPackage, client: SocketIO.Socket): void {
		console.log("Parsing Request...", request);

		switch (request.request) {
			case "join-room" :
				this.joinRoom(client, request.data.room, request.data.name, request.data.callback);
				break;
		}

	}

	emitMessage(payload: SocketPackage, client: SocketIO.Socket): void {
		client.emit("message", payload);
	}

	broadcastMessage(payload: SocketPackage, room: string): void {
		this.io.emit("broadcast", payload);
	}

	emitData(payload: SocketPackage, client: SocketIO.Socket): void {
		client.emit("data", payload);
	}

	// Helpers
	joinRoom(client: SocketIO.Socket, roomName: string, username: string, callback: string) {

		if (typeof this.rooms[roomName] === "undefined" || this.rooms[roomName].sockets.length > 6) {
			client.name = username;
			client.join(roomName);

			this.broadcastMessage(<SocketPackage>{
				from: "server",
				status: 200,
				request: callback,
				message: `${client.name} has joined the room`,
				data: {
					id: client.id,
					userName: client.name
				}
			}, roomName);
			return true;
		} else {
			this.emitMessage(<SocketPackage>{
				from: "server",
				status: 401,
				message: "The room you're trying to enter already has 6 members"
			}, client);
			return false;
		}
	}

}

export default SocketServer;
