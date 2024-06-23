<script setup>
import { defineProps } from "vue";
import { CreateURL } from "../utils";

// defineProps(['author']);
defineProps({
  author: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-gray-800 rounded-lg p-4 text-center pb-7">
    <div v-if="author">
      <img
        :src="CreateURL(author.avatar)"
        class="inline-block rounded-full w-32 h-32 mb-4"
        alt="author avatar"
      />
      <h3 class="text-2xl font-bold mb-4">{{ author.full_name }}</h3>
      <p class="text-gray-400 mb-4">{{ author.short_bio }}</p>
      <router-link
        :to="`/author/${author._id}`"
        class="bg-green-400 hover:bg-green-900 w-full px-10 py-3 rounded-lg"
        >Profile</router-link
      >
    </div>
  </div>
</template>
