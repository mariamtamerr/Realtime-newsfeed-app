<script setup>
import SidebarNav from "./SidebarNav.vue";
</script>

<template>
  <!-- sidenav -->
  <div class="hamburger absolute">
    <SidebarNav />
  </div>
  <!-- end sidenav -->

  <!-- header -->
  <header class="flex w-full items-center justify-center p-4">
    <div class="text-center text-2xl uppercase font-light tracking-widest">
      Gold news
    </div>
  </header>
  <!-- end header -->
</template>
