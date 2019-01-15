import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      name: 'Luis Centeno',
      avatar: undefined
    },
    authToken: undefined,
    expToken: undefined,
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
        assigned_users: [{ name: 'Luis Centeno' }],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis urna et suscipit fringilla. Morbi ut viverra sapien, efficitur congue odio. Proin eu ante vulputate, imperdiet eros pharetra,',
        due_date: '2019-01-12T04:52:34.382Z',
        created_at: '2019-01-12T04:52:34.382Z',
        project: { name: 'Samson' },
        replies: [
          {
            id: 1,
            ticket_id: 1,
            user: { name: 'Luis Centeno' },
            created_at: '2019-01-12T04:52:34.382Z',
            description:
              'Morbi ut viverra sapien, efficitur congue odio. Proin eu ante vulputate, imperdiet eros pharetra,'
          }
        ]
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
        assigned_users: [{ name: 'Luis Centeno' }],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis urna et suscipit fringilla. Morbi ut viverra sapien, efficitur congue odio. Proin eu ante vulputate, imperdiet eros pharetra,',
        due_date: '2019-01-12T04:52:34.382Z',
        created_at: '2019-01-12T04:52:34.382Z',
        project: { name: 'Demo' },
        replies: [
          {
            id: 2,
            ticket_id: 2,
            user: { name: 'Luis Centeno' },
            created_at: '2019-01-12T04:52:34.382Z',
            description:
              'Morbi ut viverra sapien, efficitur congue odio. Proin eu ante vulputate, imperdiet eros pharetra,'
          }
        ]
      }
    ]
  },
  mutations: {
    addTickedReply(state, reply) {
      const ticket = state.tickets.find(t => t.id == reply.ticket_id)
      ticket.replies.push(reply)
    },

    updateTicketReply(state, updatedReply) {
      const ticket = state.tickets.find(t => t.id == updatedReply.ticket_id)
      const reply = ticket.replies.find(r => (r.id = updatedReply.id))
      reply.description = updatedReply.description
    },

    updateTicket(state, ticket) {
      state.ticket = [...state.tickets.filter(t => t.id !== ticket.id), ticket]
    },

    setExpToken(state, expiration) {
      state.expToken = new Date(expiration * 1000)
    },

    setAuthToken(state, token) {
      state.authToken = token
    },

    setUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {},
  getters: {
    isLogged: state => {
      if (
        state.currentUser !== undefined &&
        state.currentUser.id &&
        state.authToken !== ''
      ) {
        return true
      } else {
        return false
      }
    },
    getToken: state => {
      return state.authToken
    },

    getExpDate: state => {
      return state.expToken ? new Date(state.expToken) : undefined
    },

    getRoles: state => {
      if (state.currentUser.id) {
        return state.currentUser.roles.map(r => r.name)
      }
      return []
    },

    isAdministrative: state => {
      if (state.currentUser.id) {
        const adminRoles = ['admin', 'moderator']
        const userRoles = state.currentUser.roles.map(r => r.name)
        if (userRoles.some(r => adminRoles.includes(r))) {
          return true
        }
      }
    }
  }
})
