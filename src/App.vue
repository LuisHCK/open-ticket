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
