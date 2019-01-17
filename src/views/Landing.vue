<template>
  <div class="page" id="landing-page">
    <nav-bar/>
    <div class="landing-container">
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <div class="columns is-mobile is-multi-line">
            <div class="column is-half-desktop is-full-mobile center-vertical">
              <div class="info-container">
                <h1 class="is-size-3 has-text-white">
                  Intuitive and open-source customer support platform
                </h1>
                <p class="branding has-text-white is-size-6">
                  <b class="hast">Open Ticket</b> enables customer support staff to receive, process, and respond to incident or service requests.
                </p>
                <button @click="$router.push('/home')" class="button is-success is-rounded">SIGN UP</button>
              </div>
            </div>
            <div class="column is-half-desktop is-full-mobile">
              <img :src="require('@/assets/vector-art.svg')" alt="Company art">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/landing-page/NavBar.vue";
export default {
  name: "landing-page",

  components: {
    NavBar
  }
};
</script>

<style scoped lang="scss">
#landing-page {
background: -webkit-linear-gradient(rgba(123,209,205,1) 0%, rgba(115,118,230,1) 100%);
background: -o-linear-gradient(rgba(123,209,205,1) 0%, rgba(115,118,230,1) 100%);
background: linear-gradient(rgba(123,209,205,1) 0%, rgba(115,118,230,1) 100%);  width: 100%;
  min-height: 100vh;

  .landing-container {
    display: flex;
    justify-content: space-around;
  }
}
.center-vertical {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
}
.branding {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>