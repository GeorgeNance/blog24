<template>
  <div class="space-y-6 flex content-center flex-col">
    <NuxtImg ref="avatar" src="/avatar.jpg" alt="George Nance" draggable="false"
             class="ring-2 border mx-auto ring-gray-200 border-gray-300 dark:ring-primary/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-16 w-16 md:h-32 md:w-32 "
             sizes="48px md:128px" placeholder format="webp" />

    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 text-center">
      Welcome!👋
    </h1>
    <p ref="description" class="text-gray-900 dark:text-gray-300">
      I'm George Nance, a Full Stack Web Developer from Chandler, Arizona. My passion lies in leveraging the latest
      technologies to craft accessible, engaging experiences.
    </p>
    <p class="text-gray-900 dark:text-gray-300">
      By day, I'm a Fullstack Developer at
      <a href="https://vividracing.com" target="_blank" class="underline">Vivid Racing</a>, and
      by night (and weekends), I'm busy tinkering with some random tool or app
      that I am building.
    </p>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "Home",
  description:
    " I'm George Nance, a Full Stack Web Developer from the sunny landscapes of Phoenix, Arizona. My passion lies in leveraging the latest technologies to craft accessible, engaging experiences.",
});

// Grab mouse position



</script>
