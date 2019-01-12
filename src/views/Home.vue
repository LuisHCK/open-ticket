<template>
  <div class="home">
    <div class="columns is-variable is-mobile is-multiline is-1">
      <div class="column">
        <info-item title="Unresolved"/>
      </div>
      <div class="column">
        <info-item title="Overdue"/>
      </div>
      <div class="column">
        <info-item title="Due today"/>
      </div>
      <div class="column">
        <info-item title="Open"/>
      </div>
      <div class="column">
        <info-item title="On hold"/>
      </div>
      <div class="column">
        <info-item title="Unassigned"/>
      </div>
    </div>

    <div class="columns is-variable is-1 is-mobile">
      <div class="column is-half-desktop">
        <recent-tickets/>
      </div>
      <div class="column is-half-desktop">
        <today-trends/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoItem from "@/components/dashboard/InfoItem.vue";
import RecentTickets from "@/components/dashboard/RecentTickets.vue";
import TodayTrends from "@/components/dashboard/TodayTrends.vue";

export default {
  name: "home",
  components: {
    InfoItem,
    RecentTickets,
    TodayTrends
  }
};
</script>

<style scoped lang="scss">
.home {
  padding: 8px;
}
</style>

