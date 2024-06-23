<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import sanity from "../../client";
import { CreateURL } from "../../utils";
import PostCard from "../../components/PostCard.vue"
const route = useRoute();
const id = ref(route.params.id);
const author = ref(null);

onMounted(() => {
  // 3 dots = everything
  //   add in posts, query posts , make sure to get all authors posts using id
  // get id , title , excerpt , ....
  const query = ` *[_type == "author" && _id == $id][0] 
    {
        ...,
         "posts":
          *[_type == "post" && author->_id == $id] 
          {
            _id,
            title,
            excerpt,
            image,
            _createdAt,
            author->{full_name,avatar}
          } 
    } `;

    const params = {
        id: id.value
    }

    sanity.fetch(query, params).then(data => {
        console.log(data)
        author.value = data
    })
});
</script>

<template>
  <main class="author-page">
    <section v-if="author" class="container mx-auto p-4">
        <div class="flex items-center mb">
            <img :src="CreateURL(author.avatar)" class="inline-block rounded-full w-16 h-16 mr-4" alt="">
            <h1 class="text-gray-300 text-2xl uppercase font-bold">
                {{  author.full_name }}
            </h1>
        </div>
        <p class="text-gray-400 mb-8 ms-20">{{  author.short_bio }}</p>

        <div class="grid gap-4">
            <PostCard v-for="(post, i) in author.posts" :key="i" :post="post"/>
        </div>
    </section>
    <section v-else class="container mx-auto p-4">
      <p class="text-lg text-white">Loading...</p>
    </section>
  </main>
</template>
