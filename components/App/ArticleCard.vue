<template>
  <NuxtLink :to="article._path" class="group">
    <article v-motion :initial="{
      opacity: 0,
      y: -100,
      scale: 1,
    }" :enter="{
  opacity: 1,
  y: 0,
  scale: 1,
}" :hovered="{
  scale: 1.05,

}" :delay="delayAnimation">
      <h2
          class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
        {{ article.title }}
      </h2>

      <!-- Read Time -->

      <p class="relative z-10 text-sm text-gray-600 dark:text-gray-400">
        <span class="relative z-10 text-sm text-gray-600 dark:text-gray-400" v-if="article.readingTime">
          {{ article.readingTime.text }}
        </span>
        <span class="px-2">❖</span>
        {{ article.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
  delayAnimation: {
    type: Number,
    default: 0,
  },
});



</script>