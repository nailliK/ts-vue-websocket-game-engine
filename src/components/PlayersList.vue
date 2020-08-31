<template>
	<div>
		<p v-if="!players.length">
			No Players available.
		</p>

		<ul
			class="players-list"
			v-if="players.length">
			<players-list-item
				:id="player.id"
				:key="player.id"
				:player="player"
				v-for="player in players"></players-list-item>
		</ul>
	</div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {computed, ComputedRef, defineComponent} from "vue";
import {useStore} from "vuex";
import PlayersListItem from "@/components/PlayersListItem.vue";

const PlayersList = defineComponent({
	name: "PlayersList",
	components: {
		PlayersListItem
	},
	setup() {
		const store = useStore();
		const players: ComputedRef = computed(() => store.state.players);
		const deck: ComputedRef = computed(() => store.state.deck);
		store.commit("hydrateDeck");
		store.commit("shuffleDeck");
		console.log(deck);

		return {
			players
		};
	}
});

export default PlayersList;
</script>
