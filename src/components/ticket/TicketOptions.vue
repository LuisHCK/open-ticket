<template>
  <div class="ticket-reply panel">
    <div class="is-size-6 has-text-weight-semibold" v-text="'Ticket Options'"/>
    <hr>
    <div class="form">
      <b-field label="Type">
        <b-select placeholder="Select ticket type" expanded v-model="type">
          <option value="problem">Problem</option>
          <option value="error">Error</option>
          <option value="question">Question</option>
          <option value="bug-report">Bug Report</option>
          <option value="feature-request">Feature request</option>
        </b-select>
      </b-field>

      <b-field label="Status">
        <b-select placeholder="Select ticket type" expanded v-model="status">
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="waiting-customer">Waiting on Customer</option>
          <option value="waiting-third-party">Waiting on third party</option>
        </b-select>
      </b-field>

      <b-field label="Priority">
        <b-select placeholder="Select ticket type" expanded v-model="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </b-select>
      </b-field>

      <b-field label="Assign to">
        <b-taginput
          v-model="selectedUsers"
          :data="filteredUsers"
          field="name"
          ellipsis
          autocomplete
          icon="tag"
          placeholder="Search user"
          @typing="getFilteredUsers"
        ></b-taginput>
      </b-field>

      <br>

      <button class="button is-success is-fullwidth" @click="updateTicket">
        <span class="icon is-medium">
          <i class="mdi mdi-content-save"></i>
        </span>
        <span>Update</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket-options",

  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {},
          assigned_to: []
        };
      }
    }
  },

  data() {
    return {
      users: [{ id: 1, name: "Luis Centeno" }, { id: 2, name: "Jhon Connor" }],
      filteredUsers: [],
      selectedUsers: [],
      priority: undefined,
      type: undefined,
      status: undefined
    };
  },

  methods: {
    getFilteredUsers(text) {
      this.filteredUsers = this.users.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },

    updateTicket() {
      this.ticket.assigned_to = this.selectedUsers;
      this.ticket.status = this.status;
      this.ticket.type = this.type;
      this.ticket.priority = this.priority;
      this.$store.commit("updateTicket", this.ticket);
    }
  },

  mounted() {
    this.selectedUsers = Array.from(this.ticket.assigned_to);
    this.status = this.ticket.status;
    this.type = this.ticket.type;
    this.priority = this.ticket.priority;
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
label {
  font-size: 12pt !important;
}
</style>