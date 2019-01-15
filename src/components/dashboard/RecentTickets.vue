<template>
  <div class="recent-tickets panel">
    <h3 class="is-size-6" v-text="'Recent Tickets'"/>
    <div>
      <div v-if="tickets.length">
        <ticket-list-item v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
      </div>
      <div v-else>
        <b-message
          title="Information"
          type="is-info"
          has-icon
          :closable="false"
        >No tickets available</b-message>
      </div>
    </div>
  </div>
</template>

<script>
import TicketListItem from "@/components/dashboard/TicketListItem.vue";
export default {
  name: "recent-tickets",

  components: {
    TicketListItem
  },

  props: {
    tickets: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="scss">
.ticket-list-item {
  margin-bottom: 8px;
}
</style>