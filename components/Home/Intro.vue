<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="George Nance"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Welcome!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
       I'm George Nance, a Full Stack Web Developer from the sunny landscapes of Phoenix, Arizona, with roots in Illinois where my journey in technology began with a Computer Science degree. My passion lies in leveraging the latest web technologies to craft accessible, engaging experiences. This portfolio reflects my professional path and personal projects, all aimed at fostering connection and growth within the digital realm. Thank you for visiting, and I'm eager to explore how we can shape the future of the web together. 👋
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Fullstack Developer at
      <a href="https://vividracing.com" target="_blank" class="underline">Vivid Racing</a>, and
      by night (and weekends), I'm busy tinkering with some random tool or app
      that I am building.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "George Nance",
  description:
    "I'm George , your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});
</script>
