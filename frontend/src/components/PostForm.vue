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
    <v-card title="Dialog">
      <v-form validate-on="submit lazy" @submit.prevent="submitTaskForm">
      <v-text-field
        v-model="taskData.name"
        :rules="[rules.required]"
        label="Task name"
      ></v-text-field>

      <v-text-field
        v-model="taskData.description"
        :rules="[rules.required]"
        label="Task description"
      ></v-text-field>

      <v-text-field
        v-model="taskData.datetime"
        label="Task Date"
        type="date"
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

  export default {
    data() {
        return {
            loading: false,
            rules: {required: value => !!value || 'Field is required'},
            timeout: null,
            taskData: {
                name: '',
                description: '',
                datetime: '',
                creator: 'User'
            }
        }
    },

    methods: {
      async submitTaskForm (event) {
        this.loading = true
        const isValid = await event

        try {
            if (this.taskData.datetime) {
                const [day, month, year] = this.taskData.datetime.split('-');

               
            }

            isValid.valid && await postPost(this.taskData)
            this.isActive = false
        }
        catch(e) {
            console.log('[API] error:',(e))
        }

        this.loading = false

      },
    },
  }
</script>
