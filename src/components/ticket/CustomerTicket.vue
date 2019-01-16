<template>
  <div class="panel">
    <div class="panel-header is-flex">
      <div class="is-flex is-centered-vertically">
        <avatar :img="ticket.user.avatar" :alt="ticket.user.first_name" class="avatar"/>
        <div class="user-info">
          <div class="is-size-6 has-text-weight-semibold" v-text="ticket.title"/>
          <div>
            <small class="user-name" v-text="ticket.user.full_name"/>
            <small class="has-text-grey">open a ticket</small>
          </div>
        </div>
      </div>
      <div class="is-flex">
        <small class="has-text-grey">{{ticket.created_at | fromNow}}</small>
      </div>
    </div>
    <hr>
    <div class="message-area" v-html="ticket.description"/>

    <div class="screenshots-container" v-if="ticket.screenshots.length">
      <hr>
      <h3 class="is-size-7">Screenshots</h3>
      <div class="screenshots-thumbs">
        <img 
          v-for="(screenshot, i) in ticket.screenshots"
          :key="'scr'+i"
          :src="screenshot.thumb.url"
          @click="showImage(screenshot.url)">
      </div>
    </div>

    <b-modal :active.sync="isImageModalActive">
      <a :href="selectedImage" target="_blank"  class="image">
        <img :src="selectedImage">
      </a>
    </b-modal>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

export default {
  name: "customer-ticket",
  components: {
    Avatar
  },

  data() {
    return {
      isImageModalActive: false,
      selectedImage: undefined
    }
  },

  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {}
        };
      }
    }
  },

  methods: {
    showImage(url) {
      this.isImageModalActive = true
      this.selectedImage = url
    }
  }
};
</script>

<style scoped lang="scss">
.panel-header {
  align-items: center;
  justify-content: space-between;
}
.screenshots-thumbs {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  img {
    margin: 3px;
  }
}
</style>