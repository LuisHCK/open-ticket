<template>
  <div class="nav-bar">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters-desktop is-full-mobile">
        <div class="items">
          <div class="title has-text-white">
            <span>Open Ticket</span>
          </div>
          <div class="links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav-bar {
  padding: 10px;
  .items {
    display: flex;
    color: white;
    justify-content: space-between;
  }
  .links {
    a {
      padding-left: 5%;
      padding-right: 5%;
      color: white;
      text-decoration: none;
      &:hover {
        color: rgb(228, 228, 228);
      }
    }
  }
}
</style>