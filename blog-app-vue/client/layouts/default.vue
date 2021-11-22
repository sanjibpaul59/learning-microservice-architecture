<template>
  <v-app dark>
    <v-app-bar color="yellow" :clipped-left="clipped" fixed app>
      <v-toolbar-title>Blog App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false
    };
  }
};
</script>
