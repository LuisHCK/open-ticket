<template>
  <div class="ticket-page page">
    <div class="columns is-mobile is-variable is-1">
      <div class="column is-two-thirds-desktop">
        <!-- Time details -->
        <ticket-time-details v-if="ticket.id" :ticket="ticket"/>
        <!-- Customer ticket -->
        <customer-ticket v-if="ticket.id" :ticket="ticket"/>
        <!-- Replies -->
        <reply v-for="reply in ticket.replies" :key="reply.id" :reply="reply" @select="editReply"/>

        <!-- Ticket actions -->
        <ticket-actions
          v-if="ticket.id"
          :ticket="ticket"
          @toggle-reply="showReplyForm=!showReplyForm"
        />

        <!-- Ticket response form -->
        <ticket-reply-form
          :ticket="ticket"
          :reply="selectedReply"
          v-if="showReplyForm"
          @submit="submitReply"
          @cancel="cancelReply()"
        />
      </div>

      <div class="column is-one-third-desktop">
        <!-- Ticket options -->
        <ticket-options
          v-if="ticket.id"
          class="is-full-height"
          :ticket="ticket"
          @update="ticket=$event"
          @update-assigned="ticket.assigned_users=$event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TicketListItem from "@/components/dashboard/TicketListItem.vue";
import Reply from "@/components/ticket/Reply.vue";
import CustomerTicket from "@/components/ticket/CustomerTicket.vue";
import TicketTimeDetails from "@/components/ticket/TicketTimeDetails.vue";
import TicketOptions from "@/components/ticket/TicketOptions.vue";
import TicketActions from "@/components/ticket/TicketActions.vue";
import TicketReplyForm from "@/components/ticket/TicketReplyForm.vue";

export default {
  name: "ticket-page",

  components: {
    TicketListItem,
    Reply,
    CustomerTicket,
    TicketTimeDetails,
    TicketOptions,
    TicketActions,
    TicketReplyForm
  },

  computed: {
    ...mapState(["tickets"])
  },

  data() {
    return {
      ticket: {},
      selectedReply: {},
      showReplyForm: false
    };
  },

  methods: {
    getTicket(id) {
      this.$http
        .get(`tickets/${id}`)
        .then(res => {
          this.ticket = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    cancelReply() {
      this.selectedReply = {};
      this.showReplyForm = false;
    },

    editReply(reply) {
      this.selectedReply = reply;
      this.showReplyForm = true;
    },

    submitReply(data) {
      if (data.update) {
        let reply = this.ticket.replies.find(t => t.id == data.reply.id)
        reply = data.reply
      } else {
        this.ticket.replies.push(data.reply)        
      }
      this.selectedReply = {}
      this.showReplyForm = false
    }
  },

  created() {
    this.getTicket(this.$route.params.id);
  }
};
</script>

<style scoped lang="scss">
.ticket-page {
  padding: 8px;
}
</style>