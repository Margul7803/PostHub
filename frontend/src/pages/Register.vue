<script setup lang="ts">
import { postRegister } from '../services/authService';

</script>

<template>
<v-sheet class="mx-auto" max-width="300">
    <v-form validate-on="submit lazy" @submit.prevent="submitUserForm">
      <v-text-field
        v-model="userDate.username"
        :rules="[rules.required]"
        label="Username"
      ></v-text-field>

      <v-text-field
        v-model="userDate.email"
        :rules="[rules.required]"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="userDate.password"
        :rules="[rules.required]"
        label="Password"
      ></v-text-field>

      <v-text-field
        v-model="userDate.avatarUrl"
        :rules="[rules.required]"
        label="Profile picture URL"
      ></v-text-field>

      <v-btn
        :loading="loading"
        class="mt-2"
        text="Create account"
        type="submit"
        block
      ></v-btn>
    </v-form>
    Already have an account? <router-link to="/login">Login here</router-link>
  </v-sheet>
</template>

<script lang="ts">
export default {
  data() {
      return {
          loading: false,
          rules: {required: (value: any) => !!value || 'Field is required'},
          timeout: null,
          userDate: {
            username: '',
            password: '',
            email: '',
            avatarUrl: ''
          }
      }
  },

  methods: {
    async submitUserForm (event: any) {
      this.loading = true
      const isValid = await event

      try {
          isValid.valid && await postRegister(this.userDate)

          this.$router.push("/")
      }
      catch(e) {
          console.log('[API] error:',(e))
      }

      this.loading = false

    },
  },
}
</script>


<style scoped>
</style>
