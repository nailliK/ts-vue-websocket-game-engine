<template>
	<li class="players-list__player">
		<h3>{{ name }}</h3>
		<p>{{ points }} point(s)</p>
	</li>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {defineComponent, toRefs} from "vue";

const PlayersList = defineComponent({
	name: "PlayersList",
	props: ["player"],
	setup(props) {
		console.log(props);
		return {
			...toRefs(props.player)
		};
	}
});

export default PlayersList;
</script>
