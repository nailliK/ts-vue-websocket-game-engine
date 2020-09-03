<template>
	<header>
		Dev Simulator

		<font-awesome-icon
			icon-name="camera"
			prefix="fas"/>

		<nav id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about">About</router-link>
		</nav>
	</header>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {defineComponent} from "vue";
import FontAwesomeIcon from "@/components/FontAwesomeIcon.vue";

const PageHeader = defineComponent({
	name: "PageHeader",
	components: {FontAwesomeIcon},
	setup() {
		return {};
	}
});

export default PageHeader;
</script>
