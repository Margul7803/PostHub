<script setup lang="ts">
import { ref } from 'vue'
const isActive = ref(false)
</script>

<template>
  <v-dialog v-model="isActive" max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        color="indigo"
        height="50"
        width="100%"
        v-bind="activatorProps"
        variant="flat"
      >Post
        <v-icon icon="mdi-send" end></v-icon>
      </v-btn>
    </template>

    <v-card title="Post">
      <v-form validate-on="submit lazy" @submit.prevent="submitTaskForm">
        <v-text-field
          v-model="postData.description"
          :rules="[rules.required]"
          label="description"
        ></v-text-field>

        <v-text-field
          v-model="postData.imageUrl"
          :rules="[rules.required]"
          label="image url"
        ></v-text-field>

        <v-btn
          :loading="loading"
          class="mt-2"
          text="Add Tasks"
          type="submit"
          @click=" isActive = false"
          block
        ></v-btn>
      </v-form>

      <v-btn
        text="Close Dialog"
        @click="isActive = false"
      ></v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { postPost } from '../services/postService'
import { useUserStore } from '../store/userModule';

export default {
  data() {
    return {
      loading: false,
      rules: { required: value => !!value || 'Field is required' },
      postData: {
        description: '',
        imageUrl: '',
      },
    };
  },
  methods: {
    async submitTaskForm(event) {
      this.loading = true;
      const isValid = await event;
      const userStore = useUserStore();
      const userToken = userStore.getToken();
      try {
        if (isValid.valid) {
          await postPost(this.postData, userToken);
          isActive.value = false;
        }
      } catch (e) {
        console.log('[API] error:', e);
      }
      this.loading = false;
    },
  },
};
</script>
