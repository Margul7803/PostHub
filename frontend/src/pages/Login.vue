<script setup lang="ts">
import { postLogin } from '../services/authService';
import { useUserStore } from '../store/userModule';

</script>

<template>
<v-sheet class="mx-auto" max-width="300">
    <v-form validate-on="submit lazy" @submit.prevent="submitUserForm">
      <v-text-field
        v-model="userData.email"
        :rules="[rules.required]"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="userData.password"
        :rules="[rules.required]"
        label="Password"
      ></v-text-field>

      <v-btn
        :loading="loading"
        class="mt-2"
        text="Login"
        type="submit"
        block
      ></v-btn>
    </v-form>
    Don't have an account ? <router-link to="/register">Register here</router-link>

  </v-sheet>
</template>

<script lang="ts">
export default {
  data() {
      return {
          loading: false,
          rules: {required: (value: any) => !!value || 'Field is required'},
          timeout: null,
          userData: {
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
        if (isValid.valid){
          const token = await postLogin(this.userData)
          const userStore = useUserStore()
          userStore.setToken(token)

          this.$emit('login-event');
          this.$router.push("/")
        }
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
