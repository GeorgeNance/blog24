<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <button class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-200"
          v-motion :enter="{ scale: 1 }" :hovered="{ scale: 1.2 }" @click="isDark = !isDark">
    <Icon aria-hidden="true" :name="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
          class="w-8 h-8 md:w-5 md:h-5" />
    <span class="sr-only">Toggle theme</span>
  </button>
</template>
