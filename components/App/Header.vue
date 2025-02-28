<template>
  <div>
    <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 font-serif">
      {{ title }}
    </h1>
    <p class="mt-4 text-base text-gray-600 dark:text-gray-400 font-serif">
      {{ description }}
    </p>
    <!-- A glowy line -->
    <div class="mt-6 h-1 w-full bg-linear-to-r from-zinc-600 to-zinc-400 rounded-full"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: '',
  },
});
</script>
