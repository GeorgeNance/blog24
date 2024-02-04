<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="What's in my bag?"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Hardware" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Software" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Desk" />
        <AppUsesItem v-for="(item, id) in desk" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Other" />
        <AppUsesItem v-for="(item, id) in other" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff.";
useSeoMeta({
  title: "Things I use",
  description,
});
const { data: uses } = await useAsyncData("uses", () =>
  queryContent("uses").findOne()
);
console.log(uses);

// Access each category directly from the `uses.value`
const hardware = uses.value.hardware;
const software = uses.value.software;
const desk = uses.value.desk;
const other = uses.value.others;


</script>
