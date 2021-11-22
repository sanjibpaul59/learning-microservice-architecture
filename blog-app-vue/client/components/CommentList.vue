<template>
  <div>
    <v-list-item v-for="comment in comments" :key="comment.id">
      <v-list-item-icon>
        <v-icon>mdi-circle-small</v-icon>
      </v-list-item-icon>
      <v-list-item-content v-if="comment.status === 'approved'">
        <v-list-item-title>{{ comment.content }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-content v-else-if="comment.status === 'pending'">
        <v-list-item-title>This comment is pending</v-list-item-title>
      </v-list-item-content>
      <v-list-item-content v-else>
        <v-list-item-title>This comment is rejected</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["comments"]
};
</script>

<style lang="scss" scoped></style>
