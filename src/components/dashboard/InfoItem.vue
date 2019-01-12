<template>
  <div class="info-item panel">
    <span class="is-size-6" v-text="title"/>
    <div class="is-size-3 has-text-weight-semibold has-text-grey" v-text="info"/>
  </div>
</template>

<script>
export default {
  name: "info-item",

  props: {
    title: {
      type: String,
      default: "Item title"
    },
    info: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style scoped class="scss">
</style>