<template>
  <div ref="headerRef" :style="styles"
       class="fixed top-0 w-full z-50 text-gray-800 shadow-lg bg-white/90 shadow-gray-800/5 backdrop-blur dark:bg-slate-800/90 dark:text-gray-400">
    <nav class="mx-auto px-4 sm:px-6 max-w-4xl">
      <div class="md:hidden w-full flex justify-end">
        <!-- Hamburger Icon -->
        <button @click="toggleMobileMenu" class="text-gray-800 dark:text-gray-400 md:hidden px-2 py-2">
          <Icon aria-hidden="true" name="mdi:menu" class="w-6 h-6" />
        </button>
      </div>
      <div class="flex justify-end md:justify-between items-center w-full">

        <ul :class="{ 'hidden': !isMobileMenuOpen, 'flex': isMobileMenuOpen }"
            class="flex-col md:flex-row md:flex items-center justify-center text-sm font-medium md:space-x-4 w-full">
          <li class="md:flex-1">
            <NuxtLink to="/"
                      class="px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-200"
                      active-class="text-primary-600 dark:text-primary-400">
              <Icon aria-hidden="true" name="solar:home-smile-outline" class="w-4 h-4 z-10 md:w-4 md:h-4" />
              <h5 class="ml-2 mb-0">Home</h5>
            </NuxtLink>
          </li>
          <li v-for="item in items" :key="item.path" class="md:flex-1">
            <template v-if="!item.items">

              <NuxtLink :to="item.path"
                        class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-200"
                        active-class="text-primary-600 dark:text-primary-400">
                <Icon aria-hidden="true" :name="item.icon" class="w-4 h-4 z-10 md:w-4 md:h-4" />
                <h5 class="ml-2 mb-0 md:flex">{{ item.name }}</h5>
              </NuxtLink>

            </template>
            <!-- More Menu -->
            <div v-if="item.items" class="relative md:flex-1 w-full">
              <button @click="toggleDropdown(item.name)"
                      class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-200 w-full text-left"
                      active-class="text-primary-600 dark:text-primary-400">
                <Icon aria-hidden="true" :name="item.icon" class="w-8 h-8 z-10 md:w-7 md:h-7" />
                <h5 class="ml-2 mb-0">More</h5>
              </button>
              <div v-show="isDropdownOpen(item.name)"
                   :class="{ 'block': isDropdownOpen(item.name), 'hidden': !isDropdownOpen(item.name) }"
                   class="origin-top-left transition transform scale-95 md:scale-100 md:absolute md:right-0 md:mt-2 md:w-48 md:bg-white md:dark:text-white md:dark:bg-slate-700/90 md:shadow-lg md:rounded-md md:py-1 md:backdrop-blur w-full">
                <ul class="w-full">
                  <NuxtLink :to="subItem.path" v-for="subItem in item.items" :key="subItem.path">
                    <li
                        class="px-6 py-2 hover:bg-gray-700 dark:hover:bg-slate-600 bg-gray-800 dark:bg-slate-700 text-gray-300">
                      {{ subItem.name }}
                    </li>
                  </NuxtLink>
                </ul>
              </div>
            </div>
          </li>
          <li class="md:flex-1">
            <AppThemeToggle />
          </li>
        </ul>


      </div>

    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFixedHeader } from 'vue-use-fixed-header';
import { useRoute } from 'vue-router';

const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
const route = useRoute();
const dropdownMenuRef = ref(null);
const isMobileMenuOpen = ref(false);

const items = [

  {
    name: "Projects",
    path: "/projects",
    icon: "solar:code-2-bold-duotone",
  },
  {
    name: "Articles",
    path: "/articles",
    icon: "solar:notes-line-duotone",
  },
  // Submenu for More
  {
    name: "More",
    path: "#",
    icon: "mdi:menu",
    items: [
      {
        name: "Bookmarks",
        path: "/bookmarks",
        icon: "solar:bookmark-linear",
      },

      {
        name: "Gallery",
        path: "/gallery",
        icon: "mdi:picture",
      },
      {
        name: "Bag",
        path: "/bag",
        icon: "solar:backpack-outline",
      },
    ],
  },

];


// Dropdown state
const openDropdown = ref('');

// Toggle mobile menu
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}


// Ensure that watch is set up correctly
watch(() => route.path, () => {
  openDropdown.value = ''; // Reset the dropdown state when the route changes
  isMobileMenuOpen.value = false; // Close the mobile menu when the route changes
});

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? '' : name;
}

function isDropdownOpen(name) {
  return openDropdown.value === name;
}

// Function to close the dropdown if the click was outside
const closeDropdownOnOutsideClick = (event) => {
  if (!dropdownMenuRef.value) return;
  if (dropdownMenuRef.value.contains(event.target)) {
    // Click inside, do nothing
  } else {
    // Click outside, close the dropdown
    openDropdown.value = '';
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdownOnOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnOutsideClick);
});

</script>
