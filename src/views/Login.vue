<template>
  <div class="login-page">
    <div class="columns is-mobile is-centered">
      <div class="column is-one-third-desktop is-half-tablet is-full-mobile">
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
export default {
  name: "login-page",

  components: { LoginForm }
};
</script>

<style scoped lang="scss">
.login-page {
  min-height: 100vh;
  background-color: #8a8dee;
}
</style>