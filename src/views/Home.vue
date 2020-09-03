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
import InputText from "@/components/InputText.vue";
import {defineComponent, inject, Ref, ref} from "vue";
import SocketClient from "@/services/SocketClient";

const Home = defineComponent({
	components: {
		InputText
	},
	setup(props, context) {
		const socketClient: SocketClient | undefined = inject("socketClient");

		const startupName: Ref<string> = ref("");
		const userName: Ref<string> = ref("");

		const onJoinRoom = (e: Event) => {
			socketClient!.joinRoom(startupName.value, userName.value);
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
