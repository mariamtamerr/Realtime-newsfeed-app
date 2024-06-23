<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import sanity from "../../client";
import { CreateURL, TextToHTML } from "../../utils";

const route = useRoute();
const id = ref(route.params.id);
const post = ref(null);

onMounted(() => {
  // get all posts with same id ,, 0 for first one .. and get the author
  const query = '*[_type == "post" && _id == $id][0] { ...,author-> }';
  const params = { id: id.value };

  sanity.fetch(query, params).then((data) => {
    console.log(data);
    post.value = data;
  });
});
</script>

<template>
  <main class="post-page">
    <section v-if="post" class="container mx-auto p-4">
      <!-- image -->
      <img
        :src="CreateURL(post.image, 1200, 700)"
        class="w-full mb-8"
        alt="post image"
      />

      <!-- back button -->
      <button
        @click="$router.back()"
        class="flex items-center text-lg text-green-500 hover:text-green-600 duration-300 mb-4"
      >
        <span class="material-icons text-lg mr-1"
          >keyboard_double_arrow_left</span
        >Back
      </button>

      <!-- title -->
      <h1 class="text-3xl md:text-5xl mb-8">{{ post.title }}</h1>

      <!-- excerpt -->
      <p class="text-gray-400 italic mb-8">{{ post.excerpt }}</p>

      <!-- content -->
      <p v-html="TextToHTML(post.content)" class="text-lg mb-8"></p>
     

      <!-- author details -->
      <div class="flex items-center mb-4 cursor-pointer" @click="$router.push(`/author/${post.author._id}`)">
        <img :src="CreateURL(post.author.avatar, 300, 300)"
            class="inline-block rounded-full w-12 h-12 mr-4" alt="author image"/>
            <h1 class="text-gray-400 text-lg">
                {{ post.author.full_name }}
            </h1>
      </div>
    </section>

    <section v-else>
      <p class="text-white italic text-2xl">loadig...</p>
    </section>
  </main>
</template>
