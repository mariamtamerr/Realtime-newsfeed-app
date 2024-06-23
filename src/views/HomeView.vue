<template>
  <div>
    <h2 class="text-2xl text-white text-left ml-20">Latest Posts</h2>
    <div class="posts">
      <div v-for="(post, index) in posts" :key="index">
        <PostCard :post="post"  />
      </div>
    </div>

    <div
      class=" mx-auto  w-fit  text-white font-bold mt-10"
    >
      <button
        v-if="$store.state.total_posts > posts.length"
        @click="$store.dispatch('LoadMorePosts', 1)"
        class="bg-slate-400  hover:bg-slate-900 w-full px-10 py-3 rounded-2xl"
      >
        Load more ({{ $store.state.total_posts - posts.length }})
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import PostCard from "../components/PostCard.vue";
import sanity from "../client";

const store = useStore();
const subscription = ref(null); // for real-time changes
const posts = computed(() => store.getters.posts);




onMounted(() => {
  store.dispatch("FetchPosts", 2);

  const query = '*[_type=="post"] { ..., author-> }';

  subscription.value = sanity.listen(query).subscribe((update) => {
    switch (update.transition) {
      case "update":
        sanity.getDocument(update.result.author_ref).then((author) => {
          store.dispatch("UpdatePost", {
            // update the post then get the object result as well as author
            ...update.result,
            author,
          });
        });
        console.log("Post updated", update);
        // store.dispatch("FetchPosts", 3); // re-fetch posts
        break;
      case "appear":
        sanity.getDocument(update.result.author_ref).then((author) => {
          store.dispatch("AddNewPost", {
            // update the post then get the object result as well as author
            ...update.result,
            author,
          });
        });
        console.log("Post appeared", update);
        store.dispatch("FetchPosts", 3); // re-fetch posts
        break;
      case "delete":
        store.dispatch("RemovePost", update.documentId);
        console.log("Post deleted", update);
        store.dispatch("FetchPosts", 3); // re-fetch posts
        break;
    }
  });
});

// to avoid duplication when deletion & creation
onUnmounted(() => subscription.value.unsubscribe());
</script>
