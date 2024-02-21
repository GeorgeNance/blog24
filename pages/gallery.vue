<template>
	<main class="min-h-screen">
	  <AppHeader
		class="mb-12"
		title="Gallery"
		:description="description"
	  />
	  <h2>Art</h2>
	<AppGallery />
	</main>
  </template>
  
  <script setup>
  const description =
	"Photos of my travels, my work, and random bits of art. Here’s a big list of all of my favorite stuff.";
  useSeoMeta({
	title: "Gallery",
	description,
  });

  
  
  </script>
  