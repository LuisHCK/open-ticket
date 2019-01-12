import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [
      {
        id: 1,
        title: 'lorem ipsum text',
        type: 'bug-report',
        status: 'open',
        priority: 'medium',
        user: {
          name: 'Jhon Doe',
          avatar: require('@/assets/user-icon.png')
        },
        assigned_to: { name: 'Luis Centeno' },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis urna et suscipit fringilla. Morbi ut viverra sapien, efficitur congue odio. Proin eu ante vulputate, imperdiet eros pharetra,',
        due_date: '2019-01-12T04:52:34.382Z'
      },
      {
        id: 2,
        title: 'lorem ipsum text',
        type: 'bug-report',
        status: 'open',
        priority: 'medium',
        user: {
          name: 'Jhon Doe',
          avatar: require('@/assets/user-icon.png')
        },
        assigned_to: { name: 'Luis Centeno' },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis urna et suscipit fringilla. Morbi ut viverra sapien, efficitur congue odio. Proin eu ante vulputate, imperdiet eros pharetra,',
        due_date: '2019-01-12T04:52:34.382Z'
      }
    ]
  },
  mutations: {},
  actions: {}
})
