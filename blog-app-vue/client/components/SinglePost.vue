<template>
  <v-card width="560px">
    <v-card-title class="ma-2">
      {{ post.title }}
    </v-card-title>
    <v-card-subtitle class="mx-2">
      {{
        post.comments.length > 0
          ? `${post.comments.length} comments`
          : "# Comments"
      }}
    </v-card-subtitle>
    <v-card-text class="mx-4" v-if="post.comments.length > 0">
      <CommentList :comments="post.comments" />
    </v-card-text>
    <v-card-subtitle class="mx-2">
      <CreateForm :label="label" @submitClicked="onCommentSubmit" />
    </v-card-subtitle>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    label: "Comment"
  }),
  props: ["post"],

  methods: {
    async onCommentSubmit(value) {
      let result = await axios.post(
        `http://blog-app.org/posts/${this.post.id}/comments`,
        { content: value }
      );
      if (result.status == 201) {
        console.log("comment created");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
