<template>
  <div class="home">
    <div class="columns is-variable is-mobile is-multiline is-1">
      <div class="column">
        <info-item title="Unresolved" :info="dashboardSummary.unresolved"/>
      </div>
      <div class="column">
        <info-item title="Overdue" :info="dashboardSummary.overdue"/>
      </div>
      <div class="column">
        <info-item title="Due today" :info="dashboardSummary.dueToday"/>
      </div>
      <div class="column">
        <info-item title="Open" :info="dashboardSummary.open"/>
      </div>
      <div class="column">
        <info-item title="Waiting for customer" :info="dashboardSummary.onHold"/>
      </div>
      <div class="column">
        <info-item title="Unassigned" :info="dashboardSummary.unassigned"/>
      </div>
    </div>

    <div class="columns is-variable is-1 is-mobile">
      <div class="column is-half-desktop">
        <recent-tickets :tickets="tickets"/>
      </div>
      <div class="column is-half-desktop">
        <today-trends/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InfoItem from "@/components/dashboard/InfoItem.vue";
import RecentTickets from "@/components/dashboard/RecentTickets.vue";
import TodayTrends from "@/components/dashboard/TodayTrends.vue";

export default {
  name: "home",

  components: {
    InfoItem,
    RecentTickets,
    TodayTrends
  },

  data() {
    return {
      dashboardSummary: {},
      tickets: []
    };
  },

  computed: {
    ...mapState(["currentUser"])
  },

  methods: {
    getTickets() {
      this.$http
        .get("tickets")
        .then(res => {
          this.tickets = res.data;
          this.buildSummary();
        })
        .catch(err => {
          console.log(err);
        });
    },

    buildSummary() {
      this.dashboardSummary = {
        unresolved: this.tickets.filter(t => t.status !== "resolved").length,
        overdue: this.tickets.filter(t =>
          this.$moment(t.due_date).isBefore(this.$moment())
        ).length,
        dueToday: this.tickets.filter(t =>
          this.$moment(t.due_date).isSame(this.$moment(), "day")
        ).length,
        open: this.tickets.filter(t => t.status == "open").length,
        onHold: this.tickets.filter(t => t.status == "waiting-customer").length,
        unassigned: this.tickets.filter(t => t.assigned_users.length < 1).length
      };
    }
  },

  mounted() {
    this.getTickets();
  }
};
</script>

<style scoped lang="scss">
.home {
  padding: 8px;
}
</style>

