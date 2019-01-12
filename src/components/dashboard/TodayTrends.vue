<template>
  <div class="today-trends panel">
    <h3 class="is-size-6">Today Trends</h3>
    <div class="columns is-mobile is-multiline">
      <div class="column is-half-mobile is-one-third-desktop">
        <div class="item-info">
          <div class="is-size-6">Resolved</div>
          <div class="is-size-4 has-text-weight-semibold">0</div>
        </div>
      </div>
      <div class="column is-half-mobile is-one-third-desktop">
        <div class="item-info">
          <div class="is-size-6">Received</div>
          <div class="is-size-4 has-text-weight-semibold">0</div>
        </div>
      </div>
      <div class="column is-half-mobile is-one-third-desktop">
        <div class="item-info">
          <div class="is-size-6">Answer pending</div>
          <div class="is-size-4 has-text-weight-semibold">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "today-trends",

  props: {}
};
</script>

<style scoped lang="scss">
.item-info {
  border-left: 3px solid rgb(236, 236, 236);
  padding-left: 8px;
}
</style>