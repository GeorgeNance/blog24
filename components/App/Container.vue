<template>
	<div class="container ">
		<slot />
	</div>
</template>

<script lang="ts" setup>

</script>

<style>
.container {
	/* Add Tailwind CSS classes or custom styles here */
	@apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>