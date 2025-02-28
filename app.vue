<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <div class="bg-linear-to-br dark:from-slate-900 dark:to-slate-800 from-white to-slate-100">



    <AppNavbar />
    <div class="h-32"></div>
    <div class="z-10">
      <NuxtLayout />
    </div>
    <div class="h-32"></div>
    <AppFooter />




  </div>
</template>

<script setup lang="ts">
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s | George Nance',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
