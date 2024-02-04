<template>
	<aside
		   class="-mx-2 my-2 px-2 py-2  bg-gradient-to-br from-slate-100 to-cyan-100 dark:from-slate-800 dark:to-cyan-800 shadow-lg md:outline outline-1 outline-cyan-500 rounded relative hover:bg-gray-800/90 overflow-hidden">
		<span class="w-4 h-full absolute bottom-0 left-0  bg-cyan-200 dark:bg-cyan-600 -mt-2 -ml-2 content-normal"> </span>
		<p class="text-2xl font-semibold ml-7 mr-20 mb-0 pb-2" v-if="title != ''">{{ title }}</p>
		<!-- <div class="absolute top-5 right-4 w-1/4">

			<Icon name="mdi:lightbulb" class="w-10 h-10 opacity-50 hover:opacity-100 " />
		</div> -->
		<div class="ml-5 px-2">
			<slot></slot>
		</div>
	</aside>
</template>
  
<script setup>
defineProps({
	title: {
		type: String,
		required: false,
		default: "",
	},
	type: {
		type: String,
		default: "info",
		options: ["info", "warning", "danger"],
	},
});

// Computed classes based on the type prop
const typeClasses = {
	info: "bg-blue-500",
	warning: "bg-yellow-500",
	danger: "bg-red-500",
};
</script>
  