<template>
  <div>
    <CreateForm
      :headline="headline"
      :label="label"
      :length="length"
      @submitClicked="onPostSubmit"
    />
    <p v-if="errorMessage" class="red--text text--lighten-1">
      {{ errorMessage }}
    </p>
    <div v-if="posts">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    headline: "Create Post!!",
    label: "Title",
    length: 4,
    errorMessage: "",
    posts: {}
  }),
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async onPostSubmit(value) {
      if (value) {
        let result = await axios.post("http://blog-app.org/posts/create", {
          title: value
        });
        if (result.status == 201) {
          console.log("Created");
        } else {
          this.errorMessage = result;
          console.log(this.errorMessage);
        }
      } else {
        this.errorMessage = "Please Insert a Title";
      }
    },
    async fetchPosts() {
      let result = await axios.get("http://blog-app.org/posts");
      this.posts = result.data;
    }
  }
};
</script>

<style lang="scss" scoped></style>
