<template>
  <div class="page" id="landing-page">
    <nav-bar/>
    <div class="landing-container">
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <div class="columns is-mobile is-multi-line">
            <div class="column is-half-desktop is-full-mobile center-vertical">
              <div class="info-container">
                <h1
                  class="is-size-2 has-text-white"
                >Intuitive and open-source customer support software</h1>
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
  background-color: #8a8deeff;
  width: 100%;
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
</style>