<template>
  <div class="panel">
    <div class="time-details">
      <div class="icon-container">
        <i class="mdi mdi-av-timer"></i>
      </div>
      <div class="descriptions">
        <div v-text="ticket.status"/>
        <div class="has-text-grey">
          <small>Due {{ ticket.due_date | fromNow }}</small>
        </div>
        <div class="tags">
          <span class="tag is-danger">Urgent</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket-time-details",
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
.time-details {
  display: flex;
  .descriptions {
    padding-left: 10px;
  }
  .icon-container {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background-color: #a0d76a;
    color: white;
    font-size: 22pt;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>