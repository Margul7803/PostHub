<script setup lang="ts">
import PostForm from './components/PostForm.vue';
</script>

<template>
  <div v-if="$route.meta.layout == 'auth'"><router-view @login-event="getUserInfo"/></div>
  <v-card v-if="$route.meta.layout == 'main'">
    <v-layout>
      <v-navigation-drawer
        permanent
      >
        <template v-slot:prepend>
          <v-list-item
            lines="three"
            :prepend-avatar="profile?.avatarUrl"
            subtitle="Logged in"
            :title="profile?.username"
          ></v-list-item>
        </template>

        <v-divider>PostHub</v-divider>

        <v-list class="nav" density="compact" nav>
          <div>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" @click="$router.push('/')"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Profile" value="account" @click="goToProfile()"></v-list-item>
          </div>
        <PostForm />
        </v-list>
      </v-navigation-drawer>
      <v-main> <router-view/></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { getProfile } from './services/profileService';
import { User } from './models/userModel';
import { ref } from 'vue';
import { useUserStore } from './store/userModule';

const profile = ref<User>()

export default {
  async mounted() {
    try {

      const userStore = useUserStore()
      const userData = userStore.getUser()
      console.log('userData:', userData);
      console.log(this.$route.meta.layout)
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches dans le composant:', error);
    }
  },
  methods: {
    async getUserInfo() {
      const userStore = useUserStore()
      const userData = userStore.getUser();

      const user = await getProfile(userData)

      profile.value = user
    },
    goToProfile() {
    this.$router.push({
    name: 'profile',
    params: {
      username: profile.value?.username,
      email:  profile.value?.email,
      avatarUrl:  profile.value?.avatarUrl,
    },
  });
}
  }
};

</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
}
</style>
