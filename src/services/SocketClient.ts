import * as SocketIOClient from "socket.io-client";
import SocketPackage from "@/interfaces/SocketPackage";
import LooseObject from "@/interfaces/LooseObject";

class SocketClient {
	public socket: SocketIOClient.Socket = SocketIOClient.connect("http://localhost:" + (process.env.NODE_ENV !== "production" ? 3000 : 80));
	public options: LooseObject = {};

	constructor() {
		this.socket.on("connect", (e: Event) => {
			console.log("connected to server via websocket");
		});

		this.socket.on("message", (payload: SocketPackage) => {
			this.onMessage(payload);
		});

		this.socket.on("broadcast", (payload: SocketPackage) => {
			this.onBroadcast(payload);
		});

		return this;
	}

	onMessage(payload: SocketPackage): void {
		console.log(payload.status, payload.message);
	}

	onBroadcast(payload: SocketPackage): void {
		if (payload.status === 200) {
			console.log(payload.message);

			switch (payload!.data!.callback) {
				case "add-player" :
					this.options!.store.commit("addPlayer", {
						userName: payload!.data!.userName,
						id: payload!.data!.id
					});
					break;
			}

		} else {
			console.log(payload.message);
		}
	}

	joinRoom(room: string, name: string): void {
		this.socket.emit("request", <SocketPackage>{
			request: "join-room",
			data: <LooseObject>{
				room: room,
				name: name,
				callback: "add-player"
			}
		});
	}
}

export default SocketClient;


