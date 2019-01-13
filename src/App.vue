<template>
  <div id="app">
    <router-view v-if="withoutSideBar"/>
    <div v-else class="page-layout">
      <side-menu/>
      <div class="content">
        <nav-bar :title="pageTitle"/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    SideMenu,
    NavBar
  },

  computed: {
    withoutSideBar() {
      return this.$route.meta.withoutSideBar;
    },

    pageTitle() {
      return this.$route.name;
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
}
body {
  margin: 0px;
}
.page-layout {
  display: flex;
  flex-direction: row;
}
.content {
  width: 100%;
  padding-left: 56px;
  min-height: 100vh;
}

.panel {
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid rgb(241, 241, 241);
  width: 100%;
  &.is-full-height {
    min-height: 100%;
  }
}
.avatar {
  width: 32px;
  height: 32px;
}
.is-centered-vertically {
  align-items: center;
}
.user-info {
  padding-left: 15px;
  .user-name {
    margin-right: 8px;
  }
}
</style>
