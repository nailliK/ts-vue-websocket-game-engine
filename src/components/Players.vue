<template>
	<section class="players">
		<PlayersList></PlayersList>

		<div class="add-player">
			<button @click="onAddPlayer">Add Player</button>
		</div>
	</section>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {computed, ComputedRef, defineComponent} from "vue";
import {useStore} from "vuex";
import PlayersList from "@/components/PlayersList.vue";

const Players = defineComponent({
	name: "Players",
	components: {PlayersList},
	setup() {
		const store = useStore();
		const players: ComputedRef = computed(() => store.state.players);

		// Add Player
		const onAddPlayer = (e: MouseEvent) => {
			e.preventDefault();

			const playerName = window.prompt("Enter Player's Name");
			store.commit("addPlayer", playerName);
		};

		return {
			onAddPlayer,
			players
		};
	}
});

export default Players;
</script>
