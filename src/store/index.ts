import {createStore} from "vuex";
import Player from "@/interfaces/Player";
import SocketPackage from "@/interfaces/SocketPackage";

export default createStore({
	state: {
		broadcast: <SocketPackage>{},
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
		},
		updateBroadcast(state: any, payload: SocketPackage) {
			state.broadcast = payload;
		}
	},
	actions: {},
	modules: {}
});
