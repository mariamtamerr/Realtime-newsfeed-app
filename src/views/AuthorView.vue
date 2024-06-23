<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import AuthorCard from "../components/AuthorCard.vue";

const store = useStore();

const authors = computed(() => store.getters.authors);

onMounted(() => {
  store.dispatch("FetchAuthors");
  console.log(authors.value);
});
</script>

<template>
  <main class="author-page">
    <section class="container-mx-auto p-4">
      <h1 class="text-2xl mb-8 ms-8 text-white">Authors</h1>
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Author Card -->

        <AuthorCard
          v-for="(author, index) in authors"
          :key="index"
          :author="author"
        />
      </div>
    </section>
  </main>
</template>
