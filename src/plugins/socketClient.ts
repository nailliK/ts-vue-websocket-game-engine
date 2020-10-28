import SocketClient from "@/services/SocketClient";
import {App} from "vue";

export default {
	socketClient: new SocketClient(),
	install: (app: App) => {
		app.config.globalProperties.$socketClient = new SocketClient();
		app.provide("socketClient", {});
	}
};
