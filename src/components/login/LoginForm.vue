<template>
  <div class="login-form">
    <form @submit.prevent="submitForm">
      <b-field label="Email">
        <b-input rounded name="email" type="email" v-model="auth.email"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input rounded name="password" type="password" v-model="auth.password"></b-input>
      </b-field>

      <button type="submit" class="button is-primary is-full is-rounded is-fullwidth">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-form",

  data() {
    return {
      auth: {
        email: undefined,
        password: undefined
      }
    };
  },

  methods: {
    submitForm() {
      this.$http
        .post("sign_in", { auth: this.auth })
        .then(res => {
          this.$store.commit("setAuthToken", res.data.jwt.token);
          this.$store.commit("setExpToken", res.data.jwt.payload.exp);
          this.$store.commit("setUser", res.data.user);
          if (this.$store.getters.isAdministrative) {
            this.$router.push({ name: "home" });
          } else {
            this.$router.push({ name: "tickets" });
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.login-form {
  min-height: 300px;
  background-color: rgb(252, 252, 252);
  padding: 3%;
  margin-top: 15vh;
  border-radius: 6px;
}
</style>