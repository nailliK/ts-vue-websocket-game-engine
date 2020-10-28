import * as SocketIOClient from "socket.io-client";
import SocketPackage from "@/interfaces/SocketPackage";
import SocketEvent from "@/interfaces/SocketEvent";
import LooseObject from "@/interfaces/LooseObject";

class SocketClient {
	public socket: SocketIOClient.Socket = SocketIOClient.connect("http://localhost:" + (process.env.NODE_ENV !== "production" ? 3000 : 80));

	constructor() {
		this.initSocketListeners();
		return this;
	}

	public joinRoom = (room: string, name: string) => {
		this.socket.emit("request", <SocketPackage>{
			request: "join-room",
			data: <LooseObject>{
				room: room,
				name: name,
				callback: "add-player"
			}
		});
	};

	private initSocketListeners() {
		this.socket.on("connect", (e: Event) => {
			console.log("connected to server via websocket");
			const evt = new CustomEvent("socket-message", e);
			window.dispatchEvent(evt);
		});

		this.socket.on("message", (payload: SocketPackage) => {
			const eventPackage: SocketEvent = {detail: payload};
			const evt = new CustomEvent("socket-message", eventPackage);
			window.dispatchEvent(evt);
		});

		this.socket.on("broadcast", (payload: SocketPackage) => {
			const evt = new CustomEvent("socketBroadcast", {
				detail: payload,
				bubbles: false,
				cancelable: true
			});
			window.dispatchEvent(evt);
		});
	}
}

export default SocketClient;
