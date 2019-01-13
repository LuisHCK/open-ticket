<template>
  <div class="panel">
    <div class="buttons">
      <button class="button is-success" @click="toggleReply()">
        <span class="icon is-small">
          <i class="mdi mdi-reply"></i>
        </span>
        <span>Reply</span>
      </button>
      
      <button class="button is-warning">
        <span class="icon is-small">
          <i class="mdi mdi-archive"></i>
        </span>
        <span>Archive</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket-actions",

  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {}
        };
      }
    }
  },

  methods: {
    toggleReply() {
      this.$emit("toggle-reply");
    }
  }
};
</script>

<style scoped>
</style>