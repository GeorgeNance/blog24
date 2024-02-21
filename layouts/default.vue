<template>
	<div class="bg-gradient-to-b dark:from-slate-900 dark:to-slate-700">
    <!-- <AppSkyBackground> -->
    <AppNavbar />
  <div class="h-32"></div>
  <UContainer class="z-10">
    <slot />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
  <!-- </AppSkyBackground> -->
</div>
</template>

