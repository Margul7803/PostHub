<script setup lang="ts">
</script>

<template>
<v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      color="indigo" height="50" width="100%"
      v-bind="activatorProps"
      variant="flat"
    >Post<v-icon
          icon="mdi-send"
          end
        ></v-icon></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
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
        block
      ></v-btn>
    </v-form>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
    </v-card>
  </template>
</v-dialog>
</template>

<script>
import { postPost } from '../services/postService'
import { useUserStore } from '../store/userModule';

  export default {
    data() {
        return {
            loading: false,
            rules: {required: value => !!value || 'Field is required'},
            timeout: null,
            postData: {
              description: '',
              imageUrl: '',
            }
        }
    },

    methods: {
      async submitTaskForm (event) {
        this.loading = true
        const isValid = await event
        const userStore = useUserStore()
        const userToken = userStore.getToken()
        try {
            isValid.valid && await postPost(this.postData, userToken)

        }
        catch(e) {
            console.log('[API] error:',(e))
        }

        this.loading = false

      },
    },
  }
</script>
