<template>
  <div>
    <h2 class="uppercase text-xs font-semibold dark:text-gray-300 text-gray-500 mb-6">
      FEATURED PROJECTS
    </h2>
    <div class="space-y-4 grid-cols-2">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <NuxtLink label="All Projects &rarr;" to="/projects" variant="link" color="gray" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// const { data: projects } = await useAsyncData("projects-home", () =>
//   queryContent("/projects").limit(3).find()
// );
</script>
