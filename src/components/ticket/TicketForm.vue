<template>
  <form @submit.prevent="submitTicket">
    <div class="fields">
      <b-field expanded custom-class="is-size-7" label="Subject">
        <b-input required type="text" placeholder="Ticket subject" v-model="title"></b-input>
      </b-field>
      <b-field expanded custom-class="is-size-7" label="Cateogry">
        <b-select required placeholder="Select ticket category" v-model="category">
          <option value="problem">Problem</option>
          <option value="error">Error</option>
          <option value="question">Question</option>
          <option value="bug_report">Bug Report</option>
          <option value="feature_request">Feature request</option>
        </b-select>
      </b-field>

      <b-field expanded custom-class="is-size-7" label="Project">
        <b-select required placeholder="Select project" v-model="project_id">
          <option selected>-----</option>
          <option
            v-for="project in projects"
            :key="'p'+project.id"
            :value="project.id"
            v-text="project.name"
          />
        </b-select>
      </b-field>
    </div>
    <h2 class="is-size-7">Describe the incident</h2>
    <editor class="bordered" @input="description=$event"></editor>
    <br>
    <div class="buttons">
      <button type="submit" class="button is-success">Submit</button>
      <button class="button is-white" @click="$emit('cancel')">Cancel</button>
    </div>
  </form>
</template>

<script>
import Editor from "@/components/Editor.vue";
export default {
  name: "ticket-form",

  components: {
    Editor
  },

  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          project: {}
        };
      }
    }
  },

  data() {
    return {
      description: undefined,
      category: undefined,
      title: undefined,
      project_id: undefined,
      projects: []
    };
  },

  methods: {
    submitTicket() {
      this.$http
        .post("tickets", {
          description: this.description,
          category: this.category,
          title: this.title,
          project_id: this.project_id
        })
        .then(res => {
          this.$emit("submit", res.data);
          this.notify("Your ticket was submited");
        })
        .catch(err => console.log(err));
    },

    notify(message, type = "is-success") {
      this.$toast.open({
        duration: 5000,
        message: message,
        position: "is-top-right",
        type: type
      });
    }
  },

  created() {
    this.$http
      .get("projects")
      .then(res => {
        this.projects = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.bordered {
  border: 1px solid #cacaca;
  border-radius: 6px;
  padding: 3px;
}
</style>