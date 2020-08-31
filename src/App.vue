<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about">About</router-link>
		</div>

		<router-view/>
	</div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {defineComponent} from "vue";

const App = defineComponent({
	name: "App",
	setup() {
		return {};
	}
});

export default App;
</script>
