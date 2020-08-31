<template>
	<main class="home">
		<form @submit.prevent="onJoinRoom">
			<div class="input input--text">
				<label for="input-name">Enter Your Name</label>
				<input
					id="input-name"
					v-model="userName">
			</div>

			<div class="input input--text">
				<label for="input-room-id">Enter a Room ID</label>
				<input
					id="input-room-id"
					v-model="roomId">
			</div>

			<div class="input input--button">
				<button type="submit">Join Room</button>
			</div>
		</form>
		<!-- <players></players> -->
	</main>
</template>

<script lang="ts">
import InputText from "@/components/InputText.vue";
import {defineComponent, ref, Ref} from "vue";
import {useStore} from "vuex";
import SocketClient from "@/services/SocketClient";

const Home = defineComponent({
	components: {
		InputText
	},
	setup(props, context) {
		const store = useStore();
		const socket: SocketClient = store.state.socket;
		socket.options.store = store;

		const roomId: Ref<string> = ref("");
		const userName: Ref<string> = ref("");

		const onJoinRoom = (e: Event) => {
			socket.joinRoom(roomId.value, userName.value);
		};

		return {
			roomId,
			userName,
			onJoinRoom
		};
	}
});
export default Home;
</script>
