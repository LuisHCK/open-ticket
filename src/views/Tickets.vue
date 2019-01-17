<template>
  <div class="tickets-page page">
    <div class="columns is-mobile is-variable is-1 is-multiline">
      <div class="column is-two-thirds-desktop is-full-mobile">
        <div class="ticket-list panel">
          <div class="is-size-6 has-text-weight-semibold">Ticket List</div>
          <br>
          <template v-if="tickets.length">
            <transition-group name="list" tag="p">
              <ticket-list-item
                v-for="ticket in tickets"
                :key="ticket.id + 't'"
                :ticket="ticket"
                @showTicket="showTicket(ticket.id)"
              />
            </transition-group>
          </template>
          <template v-else>
            <b-message
              title="Information"
              type="is-info"
              has-icon
              :closable="false"
            >No tickets available</b-message>
          </template>
        </div>

        <div class="panel" v-if="ticketFormAvailable">
          <ticket-form v-if="showTicketForm" @submit="addTicket" @cancel="showTicketForm=false"/>
          <button
            class="button is-info"
            v-show="!showTicketForm"
            @click="showTicketForm=!showTicketForm"
          >
            <span class="icon is-small">
              <i class="mdi mdi-ticket"></i>
            </span>
            <span>Open new Ticket</span>
          </button>
        </div>
      </div>

      <div class="column is-one-third-desktop is-full-mobile">
        <ticket-filter-options v-model="tickets"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TicketListItem from "@/components/dashboard/TicketListItem.vue";
import TicketFilterOptions from "@/components/ticket/TicketFilterOptions.vue";
import TicketForm from "@/components/ticket/TicketForm.vue";

export default {
  name: "tickets-page",

  components: {
    TicketListItem,
    TicketFilterOptions,
    TicketForm
  },

  computed: {
    ...mapState(["currentUser"])
  },

  data() {
    return {
      tickets: [],
      showTicketForm: false,
      ticketFormAvailable: false
    };
  },

  methods: {
    showTicket(ticketId) {
      this.$router.push({ name: "ticket", params: { id: ticketId } });
    },
    getTickets() {
      this.$http
        .get("tickets")
        .then(res => {
          this.tickets = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    addTicket(ticket) {
      this.tickets.unshift(ticket);
      this.showTicketForm = false
    }
  },

  mounted() {
    this.getTickets();
    this.ticketFormAvailable = !this.$store.getters.isAdministrative;
  }
};
</script>

<style scoped lang="scss">
.tickets-page {
  padding: 8px;
  height: 100%;
}
.list-enter-active, .list-leave-active {
  transition: all 0.7s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(20px);
}
</style>