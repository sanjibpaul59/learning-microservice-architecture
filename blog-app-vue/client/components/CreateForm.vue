<template>
  <div>
    <h2 class="mb-4">{{ headline }}</h2>
    <v-row>
      <v-col :cols="length" class="d-flex">
        <v-text-field
          :headline="headline"
          dense
          outlined
          class="mr-4"
          v-model="value"
        >
          <template #label> {{ label }} </template>
        </v-text-field>
        <v-btn text color="success" @click="onClickSubmit()">Submit</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["headline", "label", "length"],
  data: () => ({
    value: ""
  }),
  methods: {
    onClickSubmit(event) {
      this.$emit("submitClicked", this.value);
      this.value = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
