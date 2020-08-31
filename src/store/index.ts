import {createStore} from "vuex";
import Player from "@/interfaces/Player";
import SocketClient from "@/services/SocketClient";

export default createStore({
	state: {
		socket: <SocketClient>new SocketClient(),
		roomName: <string>"",
		userName: <string>"",
		players: <Array<Player>>[]
	},
	mutations: {
		addPlayer(state: any, payload) {
			state.players.push(<Player>{
				id: payload.id,
				userName: payload.userName,
				points: 0
			});
		}
	},
	actions: {},
	modules: {}
});
