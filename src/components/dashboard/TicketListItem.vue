<template>
  <li class="ticket-list-item">
    <avatar :img="ticket.user.avatar" :alt="ticket.user.full_name"/>
    <div class="ticket-content">
      <div class="details">
        <div>
          <div class="tag-list tags">
            <span class="tag is-small is-primary is-rounded" v-text="ticket.project.name"/>
            <span class="tag is-small is-rounded" :class="categoryTagClass" v-text="ticket.category" />
          </div>
          <span @click="clicked()" class="has-text-weight-semibold" v-text="ticket.title"/>
          <span class="ticket-number" v-text="'#'+ticket.id"/>
        </div>
        <div>
          <i class="mdi mdi-user"/>
          <span class="user-name" v-text="ticket.user.full_name"/>
          <small class="has-text-grey-light">Openned {{ ticket.created_at | fromNow }}</small>
        </div>
      </div>
      <div class="status">
        <div class="status-item">
          <i class="mdi mdi-square" :class="ticket.priority"/>
          <small v-text="ticket.priority"/>
        </div>
        <div class="status-item">
          <i class="mdi mdi-account-box-outline"/>
          <small v-text="assignedUsers"/>
        </div>
        <div class="status-item">
          <i class="mdi mdi-chart-line-variant"/>
          <small v-text="ticket.status"/>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
export default {
  name: "ticket-list-item",
  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {},
          assigned_users: {},
          project: {}
        };
      }
    }
  },

  components: {
    Avatar
  },

  computed: {
    assignedUsers() {
      let names = this.ticket.assigned_users.map(assigned => {
        return assigned.user.first_name;
      });
      return names.length > 0 ? names.join(",") : "Unassigned";
    },

    categoryTagClass() {
      switch(this.ticket.category) {
        case 'problem':
          return 'is-warning'
        case 'error':
          return 'is-danger'
        case 'question':
          return 'is-info'
        case 'bug_report':
          return 'is-warning'
        case 'feature_request':
          return 'is-primary'
        default:
          return 'is-white'
      }
    }
  },

  methods: {
    clicked() {
      this.$router.push({ name: "ticket", params: { id: this.ticket.id } });
    }
  }
};
</script>

<style scoped lang="scss">
.ticket-list-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding-left: 15px;
  transition: all 0.6s;
  cursor: pointer;
  &:hover {
    background-color: rgb(250, 250, 250);
  }
  .ticket-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
    .details {
      padding-left: 15px;
      .ticket-number {
        padding-left: 10px;
        color: grey;
      }
      .user-name {
        padding-right: 6px;
      }
      .tag-list {
        margin-bottom: 0px;
      }
    }
    .status {
      width: 15%;
    }
    .status-item {
      small {
        padding-left: 8px;
      }
    }
  }
  .mdi-square {
    &.low {
      color: green;
    }
    &.medium {
      color: blue;
    }
    &.high {
      color: yellow;
    }
    &.urgent {
      color: red;
    }
  }
  img.user-avatar {
    width: 44px;
    height: 44px;
  }
}
</style>