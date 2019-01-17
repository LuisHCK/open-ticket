<template>
  <div class="nav-bar">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters-desktop is-full-mobile">
        <div class="items">
          <img class="logo" :src="require('@/assets/logo-horizontal-alt.svg')" alt="Open Ticket">
          <div class="links-container is-flex">
            <a class="is-size-6" href="#">Features</a>
            <a class="is-size-6" href="#">Pricing</a>
            <a class="is-size-6" href="/login">Login</a>
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
  img.logo {
    max-width: 200px;
  }
  .items {
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
  }
  .links-container {
    align-items: center;
    a {
      margin: 5px;
      color: white;
    }
  }
}
</style>