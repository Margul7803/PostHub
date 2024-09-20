<script setup lang="ts">
import PostCard from '../components/PostCard.vue';
</script>

<template>
<span v-for="(post, index) in posts" :key="index">
      <PostCard :postProps="post"/>
</span>
</template>

<style scoped>
</style>


<script lang="ts">
import { getPosts } from '../services/postService'
import { Post } from '../models/postModel';
import { ref } from 'vue';
import { usePostStore } from '../store/postModule';

const posts = ref<Post[]>([])

export default {
  async mounted() {
    try {
      posts.value = await getPosts();
      const postStore = usePostStore()
      postStore.setPosts(posts.value)
      const test = postStore.getPosts
      console.log(test);
    } catch (error) {
      console.error('Erreur', error);
    }
  }
};
</script>