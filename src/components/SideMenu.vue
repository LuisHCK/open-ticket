<template>
  <div class="side-menu">
    <ul>
      <li class="option main" @click="navigate('/home')">
        <i class="mdi mdi-view-dashboard"></i>
      </li>
      <li class="option" v-for="option in options" :key="option.id" @click="navigate(option.path)">
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
        { path: "/tickets", icon: "mdi-ticket-account" },
        { path: "/customers", icon: "mdi-account-group" },
        { path: "/", icon: "mdi-book-open" },
        { path: "/", icon: "mdi-file-chart" },
        { path: "/", icon: "mdi-settings" }
      ]
    };
  },

  methods: {
    navigate(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang="scss">
.side-menu {
  min-width: 56px;
  min-height: 100vh;
  position: fixed;
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
      transition: 0.3s;
      i {
        font-size: 18pt;
      }
      &.main {
        background-color: rgb(41, 172, 73);
        color: white;
      }
      &.option {
        cursor: pointer;
      }
      &:hover {
        color: white;
      }
    }
  }
}
</style>