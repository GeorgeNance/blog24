<script setup lang="ts">
const props = defineProps({
	code: {
		type: String,
		default: ''
	},
	language: {
		type: String,
		default: null
	},
	filename: {
		type: String,
		default: null
	},
	highlights: {
		type: Array as () => number[],
		default: () => []
	},
	meta: {
		type: String,
		default: null
	},
	class: {
		type: String,
		default: null
	}
})

const codeCopied = ref<boolean>(false);

const copyCode = (): void => {
	navigator.clipboard.writeText(props.code)
		.then(() => {
			codeCopied.value = true;
			setTimeout(function () {
				codeCopied.value = false;
			}, 5000);
		})
		.catch((e) => {
			console.error('Error: Unable to copy code.');
		});
}
</script>

<template>
	<div class="relative rounded-lg bg-[var(--shiki-default-bg)] shadow-lg ">
		<div class="flex justify-end items-center py-1 px-2 pl-3 absolute top-0 right-0">
			<div v-if="props.filename"
				 class="ml-0 mr-auto font-mono text-sm text-[var(--shiki-default)] opacity-50 truncate">
				<i>{{ filename }}</i>
			</div>
			<span v-if="codeCopied" class="px-3 rounded-sm text-green-300 font-[sans-serif] text-sm opacity-50">
				<i>Copied</i>
			</span>
			<button class="px-3  rounded-sm border font-[sans-serif] text-sm text-[var(--shiki-default)] opacity-25 hover:opacity-50 bg-inherit border-[var(--shiki-default)] hover:text-white hover:border-white whitespace-nowrap transition-all duration-300"
					@click="copyCode">
				Copy
			</button>
		</div>
		<div class="max-w-[calc(100vw-4rem)]">
			<pre :class="['m-0  overflow-x-auto px-6', $props.class]">
				<div class=""><slot/></div></pre>
		</div>
	</div>
</template>
