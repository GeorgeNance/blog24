<template>
  <li>
    <div
      class="relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:w-full after:left-0 after:right-0"
    >
      <span
        class="font-medium text-sm text-gray-600 dark:text-gray-500  pr-4"
        >{{ title }}</span>
        <hr class="w-full " />
        <!-- Line -->

      
    </div>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>
