<template>
  <div class="nav-bar">
    <strong v-text="title"/>
    <div class="options">
      <div class="user-profile">
        <i class="mdi mdi-account-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
.nav-bar {
  height: 48px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;

  .user-profile {
    i {
      font-size: 22pt;
      color: rgb(134, 134, 134);
    }
  }
}
</style>