<script setup>
import { defineProps } from "vue";
import { FormatDate, CreateURL } from "@/utils";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class=" ">
    <div
      v-if="post"
      class="mt-10 flex flex-col sm:flex-row sm:gap-3 bg-gray-900 p-5 m-10 mx-20 rounded-lg"
    >
      <div class="left">
        <img
          v-if="post.image"
          :src="CreateURL(post.image, 480, 380)"
          class="block w-full sm:max-w-xs mr-4 object-cover mb-4 sm:mb-0"
          alt="author image"
        />
      </div>

      <div class="right flex-1 flex flex-col">
        <h2 class="text-lg text-white md:text-2xl font-bold mb-4">
          {{ post.title }}
        </h2>

        <p class="text-gray-500 md:text-lg mb-4 flex-1">
          {{ post.excerpt }}
        </p>

        <!-- <img v-if="post.author.avatar" src=""/> -->

        <div
          class="authorData flex sm:flex-col md:flex-row justify-between items-start "
        >
          <div class="flex items-center sm:mb-4 md:mb-0">
            <img
              v-if="post.author.avatar"
              :src="CreateURL(post.author.avatar, 300, 300)"
              class="rounded-full mr-4 w-12 h-12"
            />
            <div>
              <p class="text-white mr-4">{{ post.author.full_name }}</p>
              <p class="text-gray-500 text-sm">
                {{ FormatDate(post._createdAt) }}
              </p>
            </div>
          </div>
        </div>

        <router-link
          :to="`/post/${post._id}`"
          class="bg-green-600 px-10 hover:bg-green-900 md:py-3 py-1 md:w-fit w-44  md:rounded-2xl rounded text-white font-bold md:mt-10 mt-3"
          >Read more</router-link
        >
      </div>
    </div>
  </div>
</template>
