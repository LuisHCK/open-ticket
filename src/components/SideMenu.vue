<template>
  <div class="side-menu">
    <ul>
      <li class="option main">
        <i class="mdi mdi-view-dashboard"></i>
      </li>
      <li class="option" v-for="option in options" :key="option.id">
        <i class="mdi" :class="option.icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "side-menu",

  data() {
    return {
      options: [
        { action: () => {}, icon: "mdi-ticket-account" },
        { action: () => {}, icon: "mdi-account-group" },
        { action: () => {}, icon: "mdi-book-open" },
        { action: () => {}, icon: "mdi-file-chart" },
        { action: () => {}, icon: "mdi-settings" },
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.side-menu {
  min-width: 56px;
  min-height: 100vh;
  position: sticky;
  background-color: #284255;
  ul {
    li {
      color: white;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      color: rgb(190, 190, 190);
      i {
        font-size: 18pt;
      }
      &.main {
        background-color: rgb(41, 172, 73);
        color: white;
      }
    }
  }
}
</style>