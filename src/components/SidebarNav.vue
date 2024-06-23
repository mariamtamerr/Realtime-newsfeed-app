<script setup>
import { computed } from "vue";
// import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const menu_is_active = computed(() => store.state.menu_is_active);
const ToggleMenu = () => {
  console.log("Toggle menu from sidebar hamburger");
  store.dispatch("ToggleMenu");
};

// activeLink for active route
// const route = useRoute();

// const activeLink = computed(() => {
//   const path = route.path;
//   if (path === "/") {
//     return "home";
//   } else if (path === "/authors") {
//     return "authors";
//   } else {
//     return "";
//   }
// });

// Watch for changes in the route and update the activeLink accordingly
// watch(route, () => {
//   if (route.path === "/") {
//     activeLink.value = "home";
//   } else if (route.path === "/authors") {
//     activeLink.value = "authors";
//   } else {
//     activeLink.value = "";
//   }
// });
</script>

<template>
  <div>
    <!-- Sidebar Toggle -->
    <div
      class="sticky top-0 inset-x-0 z-20 px-4 sm:px-6 md:px-8 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div class="flex items-center py-4">
        <!-- Navigation Toggle -->
        <button
          @click="ToggleMenu"
          type="button"
          class="text-gray-500 hover:text-gray-600"
          data-hs-overlay="#application-sidebar-dark"
          aria-controls="application-sidebar-dark"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            class="size-7"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <!-- End Navigation Toggle -->
      </div>
    </div>
    <!-- End Sidebar Toggle -->

    <!-- Sidebar -->
    <div
      id="application-sidebar-dark"
      :class="`${
        menu_is_active
          ? 'hs-overlay hs-overlay-open translate-x-0'
          : ' -translate-x-full hidden'
      } transition-all duration-300 transform  fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto `"
    >
      <div class="flex justify-start ml-7">
        <!-- Navigation Toggle -->
        <button
          @click="ToggleMenu"
          type="button"
          class="text-gray-500 hover:text-gray-600"
          data-hs-overlay="#application-sidebar-dark"
          aria-controls="application-sidebar-dark"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            class="size-7"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <!-- End Navigation Toggle -->
      </div>

      <nav
        class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul class="space-y-1.5">
          <li :class="{ 'bg-gray-700 text-white': $route.name === 'home' }">
            <a
              @click="$router.push({ name: 'home' })"
              class="flex items-center gap-x-3 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </a>
          </li>

          <li :class="{ 'bg-gray-700 text-white': $route.name === 'authors' }">
            <a
              @click="$router.push({ name: 'authors' })"
              class="flex items-center gap-x-3 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Authors
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- End Sidebar -->

    <!-- Content -->
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <!-- your content goes here ... -->
    </div>
    <!-- End Content -->
  </div>
</template>
