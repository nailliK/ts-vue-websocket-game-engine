<template>
	<main class="home">
		<form @submit.prevent="onJoinRoom">
			<div>
				<h1>Welcome to Dev Simulator!</h1>
			</div>

			<p>Enter your name and the name of the startup you wish to join. If the
				startup does not exist, you'll create a new one.
			</p>

			<div class="input input--text">
				<label for="input-name">Your Name</label>
				<input
					id="input-name"
					v-model="userName">
			</div>

			<div class="input input--text">
				<label for="input-startup-name">Startup Name</label>
				<input
					id="input-startup-name"
					v-model="startupName">
			</div>

			<div class="input input--button">
				<button type="submit">Enter</button>
			</div>
		</form>
		<!-- <players></players> -->
	</main>
</template>

<script lang="ts">
import {defineComponent, inject, ref, Ref, SetupContext} from "vue";
import SocketClient from "@/services/SocketClient";
import InputText from "@/components/InputText.vue";
import LooseObject from "@/interfaces/LooseObject";
import {useStore} from "vuex";

const Home = defineComponent({
	components: {
		InputText
	},
	props: {},
	setup(props: LooseObject, context: SetupContext) {
		const store = useStore();

		const startupName: Ref<string> = ref("");
		const userName: Ref<string> = ref("");
		const socketClient: SocketClient = inject("socketClient", <SocketClient>{});

		window.addEventListener("socketBroadcast", (e: CustomEvent) => {
			console.log(e.detail);
		});

		const onJoinRoom = (e: Event) => {
			socketClient.joinRoom(startupName.value, userName.value);
		};

		return {
			startupName,
			userName,
			onJoinRoom
		};
	}
});
export default Home;
</script>
