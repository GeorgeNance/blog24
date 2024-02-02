<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Subscribe" :description="description" />
    
  </main>
</template>

<script setup>
const description =
  "Awesome things I've found on the internet. This page is still WIP, I want to add search like bmrks.com";
useSeoMeta({
  title: "Subscribe to George Nance's Newsletter",
  description,
});



function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}


</script>
