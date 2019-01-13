<template>
  <div class="panel">
    <div class="panel-header is-flex">
      <div class="is-flex is-centered-vertically">
        <img :src="ticket.user.avatar" alt class="avatar">
        <div class="user-info">
          <div class="is-size-6 has-text-weight-semibold" v-text="ticket.title"/>
          <div>
            <small class="user-name" v-text="ticket.user.name"/>
            <small class="has-text-grey">open a ticket</small>
          </div>
        </div>
      </div>
      <div class="is-flex">
        <small class="has-text-grey">{{ticket.created_at | fromNow}}</small>
      </div>
    </div>
    <hr>
    <div class="message-area">{{ticket.description}}</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

export default {
  name: "customer-ticket",
  components: {
    Avatar
  },
  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {}
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
.panel-header {
  align-items: center;
  justify-content: space-between;
}
</style>