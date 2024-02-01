<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <!-- <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      /> -->
    </div>
  </main>
</template>

<script setup>
const description =
  "Coming soon! I'm working on a few projects that I can't wait to share. Stay tuned!";
useSeoMeta({
  title: "Projects | George Nance",
  description,
});

// const { data: projects } = await useAsyncData("projects-all", () =>
//   queryContent("/projects").find()
// );
</script>
