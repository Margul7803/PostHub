<script setup lang="ts">
import { Post } from '../models/postModel';

defineProps<{
  postProps: Post
}>()
</script>

<template>
    <v-card
      class="mx-auto"
      max-width="400"
      margin="100px"
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src="postProps.imageUrl"
        cover
      >
      </v-img>
  
      <v-card-subtitle class="pt-4">
        {{ postProps.author }}
      </v-card-subtitle>
  
      <v-card-text>  
        <div>{{ postProps.description }}</div>
      </v-card-text>
    </v-card>
</template>