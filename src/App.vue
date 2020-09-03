<template>
	<div id="app">
		<page-header/>
		<router-view/>
	</div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {defineComponent} from "vue";
import PageHeader from "@/components/PageHeader.vue";
import SocketClient from "@/services/SocketClient";

const App = defineComponent({
	name: "App",
	components: {
		PageHeader
	},
	provide: {
		socketClient: new SocketClient()
	},
	setup() {
		return {};
	}
});

export default App;
</script>

<style lang="scss">
@import "scss/main";
</style>
