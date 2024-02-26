<template>
  <div ref="headerRef" :style="styles" :class="{ 'dark': isDark }"
       class="bg-white dark:bg-gray-800 fixed top-0 w-full z-50">
    <nav class="border-b border-gray-100 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <!-- logo -->
          <div>
            <a href="#"
               class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
              <span class="font-bold">George Nance</span>
            </a>
          </div>
          <!-- mobile menu button -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="outline-none mobile-menu-button">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <!-- primary nav for desktop aligned to the right -->
          <div class="hidden md:flex items-center space-x-1">
            <template v-for="(item, index) in menuItems" :key="`desktop-${index}`">
              <div class="relative group">
                <NuxtLink :to="item.link"
                          class="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                          :class="{ 'active-menu-item': route.path === item.link }">{{
                            item.label }}</NuxtLink>
                <div v-if="item.submenu && item.submenu.length"
                     class="absolute left-0 bg-white dark:bg-gray-800 shadow-md mt-2 rounded-md overflow-hidden hidden group-hover:block">
                  <a v-for="subItem in item.submenu" :key="subItem.label" :href="subItem.link"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700">{{
                       subItem.label }}</a>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- mobile nav -->
      <div :class="{ 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen }" class="mobile-nav md:hidden">
        <div v-for="(item, index) in menuItems" :key="`mobile-${index}`" class="mobile-menu-item">
          <button @click="toggleMobileSubMenu(index)" class="w-full text-left">
            <NuxtLink :to="item.link" class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">{{
              item.label }}</NuxtLink>
          </button>
          <div v-if="item.submenu && item.submenu.length" v-show="item.isSubMenuActive" class="pl-4">
            <NuxtLink v-for="subItem in item.submenu" :key="subItem.label" :to="subItem.link"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                      :class="{ 'active-menu-item': route.path === item.link }">
              {{
                subItem.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useFixedHeader } from 'vue-use-fixed-header';
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
const route = useRoute();

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);

const menuItems = ref([
  { label: 'Home', link: '/', submenu: [], isSubMenuActive: false },
  { label: 'Articles', link: '/articles', submenu: [], isSubMenuActive: false },
  {
    label: 'More', link: '', submenu: [
      { label: 'Gallery', link: '/gallery' },
      { label: 'Bag', link: '/bag' },
    ], isSubMenuActive: false
  },
  // Additional items...
]);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleMobileSubMenu = (index) => {
  menuItems.value[index].isSubMenuActive = !menuItems.value[index].isSubMenuActive;
};

// Ensure that watch is set up correctly
watch(() => route.path, () => {

  isMobileMenuOpen.value = false; // Close the mobile menu when the route changes
});
</script>

<style scoped>
.active-menu-item {
  @apply text-blue-400 shadow-md dark:shadow-md;
  /* Example with Tailwind utilities */
  /* Customize further as needed */
}
</style>
