<template>
  <div class="tickets-page">
    <div class="columns is-mobile is-variable is-1">
      <div class="column is-three-quarters-desktop">
        <div class="ticket-list panel">
          <div class="is-size-6 has-text-weight-semibold">Ticket List</div>
          <ticket-list-item
            v-for="ticket in tickets"
            :key="ticket.id + 't'"
            :ticket="ticket"
            @showTicket="showTicket(ticket.id)"
          />
        </div>
      </div>

      <div class="column is-one-quarter-desktop">
        <div class="panel">
          <div class="is-size-6 has-text-weight-semibold">Filter</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TicketListItem from "@/components/dashboard/TicketListItem.vue";

export default {
  name: "tickets-page",

  components: {
    TicketListItem
  },

  computed: {
    ...mapState(["tickets"])
  },

  data() {
    return {};
  },

  methods: {
    showTicket(ticketId) {
      this.$router.push({ name: "ticket", params: { id: ticketId } });
    }
  }
};
</script>

<style scoped lang="scss">
.tickets-page {
  padding: 8px;
  height: 100%;
}
</style>