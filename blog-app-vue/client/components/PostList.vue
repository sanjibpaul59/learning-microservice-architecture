<template>
  <v-row>
    <v-col v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["posts"]
};
</script>

<style lang="scss" scoped></style>
