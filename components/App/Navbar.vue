<template>
  <div ref="headerRef" :style="styles"
       class="bg-white/95 dark:bg-slate-800/90 fixed top-0 w-full z-50 backdrop-blur-sm">
    <nav class="border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <!-- logo -->
          <div>
            <NuxtLink href="/"
                      class="flex items-center py-5 px-2 text-gray-900 hover:text-emerald-700 dark:text-gray-100 dark:hover:text-primary font-bold transition-colors duration-200">
              <span>George Nance</span>
            </NuxtLink>
          </div>
          <!-- mobile menu button -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu"
                    class="outline-hidden mobile-menu-button text-gray-700 dark:text-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <!-- Desktop nav -->
          <div class="hidden md:flex items-center space-x-1">
            <template v-for="(item, index) in menuItems" :key="`desktop-${index}`">
              <div class="relative group">
                <NuxtLink :to="item.link"
                          class="py-5 px-3 font-semibold transition-all duration-200 ease-in-out cursor-pointer" :class="[
                            route.path === item.link
                              ? 'text-primary dark:text-primary hover:text-primary-100 '
                              : 'text-gray-700 dark:text-gray-300 hover:text-primary-100',
                          ]" :style="{
                            opacity: route.path === item.link ? '1' : '0.85'
                          }">
                  {{ item.label }}
                </NuxtLink>
                <div v-if="item.submenu && item.submenu.length"
                     class="absolute left-0 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 mt-2 rounded-lg overflow-hidden hidden group-hover:block border border-gray-200 dark:border-gray-700">
                  <NuxtLink v-for="subItem in item.submenu" :key="subItem.label" :to="subItem.link"
                            class="block px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out"
                            :class="[
                              route.path === subItem.link
                                ? 'text-emerald-700 dark:text-emerald-400 bg-gray-50 dark:bg-gray-700/50'
                                : 'text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                            ]" :style="{
                              opacity: route.path === subItem.link ? '1' : '0.85'
                            }">
                    {{ subItem.label }}
                  </NuxtLink>
                </div>
              </div>
            </template>
            <!-- <AppThemeToggle /> -->
          </div>
        </div>
      </div>
      <!-- mobile nav -->
      <div :class="{ 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen }"
           class="mobile-nav md:hidden border-t border-gray-200 dark:border-gray-700">
        <div v-for="(item, index) in menuItems" :key="`mobile-${index}`" class="mobile-menu-item">
          <button @click="toggleMobileSubMenu(index)" class="w-full text-left">
            <NuxtLink :to="item.link"
                      class="block py-2 px-4 text-sm font-semibold transition-all duration-200 ease-in-out" :class="[
                        route.path === item.link
                          ? 'text-emerald-700 dark:text-emerald-400 bg-gray-50 dark:bg-gray-700/50'
                          : 'text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      ]" :style="{
                        opacity: route.path === item.link ? '1' : '0.85'
                      }">
              {{ item.label }}
            </NuxtLink>
          </button>
          <div v-if="item.submenu && item.submenu.length" v-show="item.isSubMenuActive"
               class="pl-4 my-2 bg-gray-50/50 dark:bg-gray-700/25 cursor-pointer">
            <NuxtLink v-for="subItem in item.submenu" :key="subItem.label" :to="subItem.link"
                      class="block py-2 px-4 text-sm font-semibold transition-all duration-200 ease-in-out" :class="[
                        route.path === subItem.link
                          ? 'text-emerald-700 dark:text-emerald-400 bg-gray-50 dark:bg-gray-700/50'
                          : 'text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      ]" :style="{
                        opacity: route.path === subItem.link ? '1' : '0.85'
                      }">
              {{ subItem.label }}
            </NuxtLink>
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
  { label: 'Now', link: '/now', submenu: [], isSubMenuActive: false },
  { label: 'About', link: '/about', submenu: [], isSubMenuActive: false },
  {
    label: 'More', link: '', submenu: [
      { label: 'Bag', link: '/bag' },
    ], isSubMenuActive: false
  },
]);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleMobileSubMenu = (index) => {
  menuItems.value[index].isSubMenuActive = !menuItems.value[index].isSubMenuActive;
};

watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});
</script>

<style scoped>
/* Remove the active-menu-item class since we're handling active states inline */
</style>
