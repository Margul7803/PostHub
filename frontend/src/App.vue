<script setup lang="ts">
</script>
<template>
  <v-app>
<tempalte v-if="$route.meta.layout === 'auth'"><router-view /></tempalte>
<template v-else>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        permanent
      >
        <template v-slot:prepend>
          <v-list-item
            lines="three"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            subtitle="Logged in"
            title="Jane Smith"
          ></v-list-item>
        </template>

        <v-divider>PostHub</v-divider>

        <v-list class="nav" density="compact" nav>
          <div>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Profile" value="account"></v-list-item>
          </div>
          <v-btn color="indigo" height="50" width="100%">Post<v-icon
          icon="mdi-send"
          end
        ></v-icon></v-btn>
        </v-list>
      </v-navigation-drawer>
      <v-main> <router-view /></v-main>
    </v-layout>
  </v-card>
</template>
</v-app>
</template>

<script lang="ts">
import { getProfile } from './services/profileService';
import { Profile } from './models/profileModel';
import { ref } from 'vue';

const profile = ref<Profile[]>([])

export default {
  async mounted() {
    try {
      profile.value = await getProfile();
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches dans le composant:', error);
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
