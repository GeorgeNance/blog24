<template>
  <div>
    <h2 class="uppercase text-xs font-semibold dark:text-gray-300 text-gray-500 mb-4">FIND ME ON</h2>
    <div class="space-y-5 flex flex-row justify-evenly">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-2 dark:hover:text-gray-200 group"
      >
              <Icon :name="link.icon" class="w-6 h-6 mr-1"></Icon>
        <span class="text-sm">
          {{ link.name }}
        </span>


      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "𝕏 (Twitter)",
    url: "https://twitter.com/GeoNance",
    icon: "bi:twitter-x",
  },
  {
    name: "GitHub",
    url: "https://github.com/GeorgeNance",
    icon: "bi:github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/georgenance/",
    icon: "bi:linkedin",
  },

];
</script>
