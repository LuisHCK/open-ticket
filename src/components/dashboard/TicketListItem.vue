<template>
  <li class="ticket-list-item">
    <img class="user-avatar" :src="ticket.user.avatar" :alt="ticket.user.name">
    <div class="ticket-content">
      <div class="details">
        <div>
          <div class="tag-list">
            <span class="tag is-primary is-rounded" v-text="ticket.project.name"/>
          </div>
          <span @click="clicked()" class="has-text-weight-semibold" v-text="ticket.title"/>
          <span class="ticket-number" v-text="'#'+ticket.id"/>
        </div>
        <div>
          <i class="mdi mdi-user"/>
          <span class="user-name" v-text="ticket.user.name"/>
          <small class="has-text-grey-light">Openned {{ ticket.created_at | fromNow }}</small>
        </div>
      </div>
      <div class="status">
        <div class="status-item">
          <i class="mdi mdi-square-medium"/>
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
export default {
  name: "ticket-list-item",
  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {},
          assigned_to: {},
          project: {}
        };
      }
    }
  },

  computed: {
    assignedUsers() {
      let names = this.ticket.assigned_to.map(user => {
        return user.name;
      });
      return names.length > 0 ? names.join(",") : "Unassigned";
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
  transition: 0.3s;
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
    }
    .status-item {
      small {
        padding-left: 8px;
      }
    }
  }
  .mdi-square-medium {
    color: green;
  }
  img.user-avatar {
    width: 44px;
    height: 44px;
  }
}
</style>