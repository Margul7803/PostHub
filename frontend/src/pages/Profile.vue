<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  username: string;
  email: string;
  avatarUrl: string;
}>();
</script>

<template>
  <v-card max-width="400" class="mx-auto">
    <v-img
      :src="props.avatarUrl"
      alt="User Avatar"
      height="200"
      class="mb-4"
    ></v-img>
    <v-card-title class="text-h6">{{ props.username }}</v-card-title>
    <v-card-subtitle class="text-body-2">{{ props.email }}</v-card-subtitle>
  </v-card>
</template>

<style scoped>
.v-card {
  text-align: center;
  padding: 20px;
}

.v-img {
  border-radius: 50%;
}
</style>
