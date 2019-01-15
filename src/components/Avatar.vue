<template>
  <img v-if="img" :src="img" alt="avatar" class="avatar">
  <div v-else class="text-avatar is-flex">
    <span v-text="capitalize(alt)"/>
  </div>
</template>

<script>
export default {
  name: "avatar",

  props: {
    img: String,
    alt: String
  },

  methods: {
    capitalize() {
      if (this.alt) {
        return this.alt.split("")[0];
      } else {
        return "?";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.text-avatar {
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: #d1e4ff;
  border-radius: 3px;
  span {
    text-transform: uppercase;
    font-size: 18px;
  }
}
</style>