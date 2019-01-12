<template>
  <div class="recent-tickets panel">
    <h3 class="is-size-6" v-text="'Recent Tickets'"/>
    <div>
      <div>
        <ticket-list-item v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
      </div>
    </div>
  </div>
</template>

<script>
import TicketListItem from "@/components/dashboard/TicketListItem.vue";
import { mapState } from "vuex";
export default {
  name: "recent-tickets",
  computed: {
    ...mapState(["tickets"])
  },
  components: {
    TicketListItem
  }
};
</script>

<style scoped lang="scss">
.ticket-list-item {
  margin-bottom: 8px;
}
</style>