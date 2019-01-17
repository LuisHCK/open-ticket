<template>
  <div class="page">
    <people-table :users="users" />
  </div>
</template>

<script>
import PeopleTable from '@/components/people/PeopleTable.vue'
export default {
  name: "people-page",

  components: {
  	PeopleTable
  },

  data() {
  	return {
  		users:[]
  	}
  },

  methods: {
  	getUsers() {
  		this.$http.get('users')
  		.then(res => this.users = res.data)
  		.catch(err => console.log(err))
  	}
  },

  created() {
  	this.getUsers()
  }
};
</script>

<style scoped>
</style>