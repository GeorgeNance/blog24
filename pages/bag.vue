<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="What's in my bag?" :description="description" />

    <div class="mx-auto">
      <div v-for="(category, index) in bag" :key="index" class="mb-10">
        <div class="mb-4">
          <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-100 font-serif">
            {{ category.name }}
          </h2>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {{ category.description }}
          </p>
          <div class="mt-3 h-px w-full bg-gradient-to-r from-zinc-500/50 to-transparent"></div>
        </div>

        <div class="space-y-2">
          <div v-for="(item, itemIndex) in category.items" :key="itemIndex"
               class="group hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg py-4 transition-colors duration-300 ease-in-out">
            <div class="flex flex-col px-4 ">
              <div class="flex items-center gap-2">
                <h3 class="text-base font-semibold font-display tracking-tight">
                  <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer"
                     class="text-gray-800 dark:text-gray-100 group-hover:text-primary-600 inline-flex items-center">
                    {{ item.name }}
                    <svg class="ml-1 w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  <span v-else class="text-gray-800 dark:text-gray-100">{{ item.name }}</span>
                </h3>
              </div>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const description =
  "Software I use, gadgets I love, and other things I recommend. Here's a big list of all of my favorite stuff.";
useSeoMeta({
  title: "Things I use",
  description,
});

const { data: bag } = await useAsyncData('bag', () => {
  return queryCollection('bag')
    .order('order', 'ASC')
    .all();
});
</script>
