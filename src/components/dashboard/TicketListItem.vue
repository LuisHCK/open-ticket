<template>
  <li class="ticket-list-item">
    <img class="user-avatar" :src="ticket.user.avatar" :alt="ticket.user.name">
    <div class="ticket-content">
      <div class="details">
        <div>
          <span class="has-text-weight-semibold" v-text="ticket.title"/>
          <span class="ticket-number" v-text="'#'+ticket.id"/>
        </div>
        <div>
          <i class="mdi mdi-user"/>
          <span class="user-name" v-text="ticket.user.name"/>
          <small class="has-text-grey-light">Openned x time ago</small>
        </div>
      </div>
      <div class="status">
        <div class="priority">
          <i class="mdi mdi-square-medium"/>
          <span v-text="ticket.priority"/>
        </div>
        <div class="assigned">
          <i class="mdi mdi-account-box-outline"/>
          <span v-text="ticket.assigned_to.name"/>
        </div>
        <div class="status">
          <i class="mdi mdi-chart-line-variant"/>
          <span v-text="ticket.status"/>
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
          assigned_to: {}
        };
      }
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
    background-color: rgb(248, 248, 248);
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
    .status {
      span {
        padding-left: 8px;
      }
    }
    .user-name {
      padding-right: 8px;
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