<template>
  <div class="ticket-reply panel">
    <div class="is-size-6 has-text-weight-semibold" v-text="'Ticket Options'"/>
    <hr>
    <div class="form">
      <b-field custom-class="is-size-7" label="Cateogry">
        <b-select @input="changeState($event, 'category')" size="is-small" placeholder="Select ticket category" expanded v-model="ticket.category">
          <option value="problem">Problem</option>
          <option value="error">Error</option>
          <option value="question">Question</option>
          <option value="bug_report">Bug Report</option>
          <option value="feature_request">Feature request</option>
        </b-select>
      </b-field>

      <b-field custom-class="is-size-7" label="Status">
        <b-select @input="changeState($event, 'status')" size="is-small" placeholder="Select ticket status" expanded v-model="ticket.status">
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="waiting_customer">Waiting on Customer</option>
          <option value="waiting_third_party">Waiting on third party</option>
        </b-select>
      </b-field>

      <b-field custom-class="is-size-7" label="Priority">
        <b-select @input="changeState($event, 'priority')" size="is-small" placeholder="Select ticket priority" expanded v-model="ticket.priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </b-select>
      </b-field>

      <b-field custom-class="is-size-7" label="Assign to">
        <b-taginput
          size="is-small"
          v-model="selectedUsers"
          :data="filteredUsers"
          field="full_name"
          ellipsis
          autocomplete
          icon="tag"
          placeholder="Search user"
          @typing="getFilteredUsers"
          @add="assignUser"
          @remove="removeAssigned"
        ></b-taginput>
      </b-field>
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
          assigned_users: []
        };
      }
    }
  },

  data() {
    return {
      users: [],
      filteredUsers: [],
      selectedUsers: [],
    };
  },

  methods: {
    getusers() {
      this.$http
        .get("users")
        .then(res => {
          this.users = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    removeAssigned(user) {
      this.$http.delete(`tickets/${this.ticket.id}/remove_assigned_user/`, 
        {
          data: {
            assigned_user: {
            user_id: user.id,
            ticket_id: this.ticket.id
          }
        }
      })
      .then(res => {
        this.$emit('update-assigned', this.selectedUsers)
      })
      .catch(err => console.log(err))
    },

    changeState(value, field) {
      let updatedTicket = {}
      updatedTicket[field] = value
      this.$http.patch(`tickets/${this.ticket.id}`, {
        ticket: updatedTicket
      })
      .then(res => {
        this.$emit('update', res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    assignUser(user) {
      this.$http.post(`tickets/${this.ticket.id}/assign_user/`,
        {
          assigned_user: {
          user_id: user.id,
          ticket_id: this.ticket.id
        }
      })
      .then(res => {
        this.$emit('update-assigned', this.selectedUsers)
      })
      .catch(err => console.log(err))
    },

    getFilteredUsers(text) {
      this.filteredUsers = this.users.filter(option => {
        return (
          option.full_name
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },

    updateTicket() {
      // Send update request
      this.$http
        .patch("tickets/" + this.ticket.id, { ticket: this.ticket })
        .then(res => {
          console.log(res.data);
          this.$emit("update", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.getusers();
    this.selectedUsers = this.ticket.assigned_users.map(assigned => {
      assigned.user.full_name = `${assigned.user.first_name} ${
        assigned.user.last_name
      }`;
      assigned.user.assigned_id = assigned.id;
      return assigned.user;
    });
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