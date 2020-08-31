<template>
	<div class="input input--text">
		<label :for="id">{{ inputLabel }}</label>
		<input
			:id="id"
			type="text"
			v-model="inputValue"/>
	</div>
</template>

<script lang="ts">
import * as uuid from "uuid";
import {defineComponent, ref, Ref} from "vue";

const InputText = defineComponent({
	name: "InputText",
	props: [
		"inputLabel"
	],
	model: {
		prop: "inputValue",
		event: "change"
	},
	setup(props, context) {
		const id: Ref<string> = ref(uuid.v4());
		const inputValue: Ref<string> = ref("");
		const onIdUpdate = (e: Event) => {
			console.log(e);
		};
		return {
			id,
			inputValue,
			onIdUpdate
		};
	}
});

export default InputText;
</script>
