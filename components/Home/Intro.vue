<template>
  <div class="space-y-6 flex content-center flex-col">
    <NuxtImg ref="avatar" src="/img/profile.jpg" alt="George Nance" draggable="false"
             class="ring-2 border mx-auto ring-gray-200 border-gray-300 dark:ring-primary/10 dark:border-gray-800 hover:ring-4 hover:scale-105 hover:rotate-3 hover:shadow-lg transition-all duration-300 ease-in-out transform bg-gray-200 dark:bg-gray-900 rounded-full h-32 w-32 md:h-48 md:w-48 "
             sizes="(min-width: 768px) 192px, 128px" placeholder format="webp" />

    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 text-center">
      Welcome!👋
    </h1>
    <p ref="description" class="text-gray-900 dark:text-gray-300">
      I'm <NuxtLink to="/about" class="text-cyan-500 font-bold">George Nance</NuxtLink>, I'm a full stack web developer
      based in Phoenix,
      AZ.
      I am
      passionate about technology and all
      things nerdy. Sometimes I write and publish it here.
    </p>
    <p class="text-gray-900 dark:text-gray-300">
      If you are curious what I am up to, checkout my <NuxtLink to="/now" class="text-cyan-500">Now</NuxtLink> page. If
      you would like to get in contact with me, please reach out to me via the social links below.
    </p>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "Home",
  description:
    "I'm George Nance, a Full Stack Web Developer from the sunny landscapes of Phoenix, Arizona. My passion lies in leveraging the latest technologies to craft accessible, engaging experiences.",
});





</script>
