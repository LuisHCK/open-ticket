<template>
  <div class="ticket-reply panel">
    <div class="panel-header is-flex">
      <div class="is-flex is-centered-vertically">
        <avatar :img="reply.user.avatar" :alt="reply.user.full_name || reply.user.first_name"/>
        <div class="user-info">
          <div>
            <small class="user-name" v-text="reply.user.full_name || `${reply.user.first_name} ${reply.user.last_name}`"/>
            <small class="has-text-grey">replied</small>
          </div>
        </div>
      </div>
      <div class="is-flex">
        <small class="has-text-grey">{{reply.created_at | fromNow}}</small>
        <b-dropdown>
          <button class="button is-text is-small" slot="trigger">
            <b-icon pack="mdi" icon="dots-vertical"></b-icon>
          </button>
          <b-dropdown-item @click="editReply">Edit</b-dropdown-item>
          <b-dropdown-item>Delete</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <hr>
    <div class="message-area" v-html="reply.description"/>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

export default {
  name: "ticket-reply",

  components: {
    Avatar
  },

  props: {
    reply: {
      type: Object,
      default: () => {
        return {
          user: {}
        };
      }
    }
  },

  methods: {
    editReply() {
      this.$emit("select", this.reply);
    }
  }
};
</script>

<style scoped lang="scss">
.panel-header {
  align-items: center;
  justify-content: space-between;
  .user-info {
    padding-left: 15px;
    .user-name {
      margin-right: 8px;
    }
  }
}
</style>