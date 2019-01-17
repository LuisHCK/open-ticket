<template>
  <div class="side-menu">
    <ul>
      <li class="option main" @click="navigate(homepath)">
        <i class="mdi mdi-view-dashboard"></i>
      </li>
      <li class="option" v-for="option in options" :key="option.id" @click="navigate(option.path)">
        <i class="mdi" :class="option.icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "side-menu",

  computed: {
    ...mapState(["currentUser"])
  },

  data() {
    return {
      homepath: "/home",
      options: [
        { path: "/tickets", icon: "mdi-ticket-account" },
        { path: "/people", icon: "mdi-account-group" },
        { path: "/knowledge-base", icon: "mdi-book-open" },
        //{ path: "/", icon: "mdi-file-chart" },
        { path: "/settings", icon: "mdi-settings" }
      ]
    };
  },

  methods: {
    navigate(path) {
      this.$router.push(path);
    }
  },

  created() {
    const roles = ["admin", "moderator"];
    if (!this.$store.getters.getRoles.some(r => roles.includes(r))) {
      this.options = [{ path: "/tickets", icon: "mdi-ticket-account" }];
      this.homepath = "/customer_dashboard";
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