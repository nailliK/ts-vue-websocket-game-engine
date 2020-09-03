<template>
	<div
		class="font-awesome-icon-wrapper"
		v-html="iconHTML"></div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {defineComponent, Ref, ref} from "vue";
import FA from "@/lib/FA";

const FontAwesomeIcon = defineComponent({
	props: [
		"prefix",
		"iconName"
	],
	name: "FontAwesomeIcon",
	setup(props) {
		const fa = new FA();
		const icon = fa.getIcon(props.prefix, props.iconName);
		const iconHTML: Ref = ref(<any>icon.html);

		return {iconHTML};
	}
});

export default FontAwesomeIcon;
</script>
