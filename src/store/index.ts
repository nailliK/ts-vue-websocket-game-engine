import {createStore} from "vuex";
import Player from "@/interfaces/Player";

export default createStore({
	state: {
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
