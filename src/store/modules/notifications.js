import axios from "axios"

export default{

  namespaced: true,
  state: {
    notifications: [],
    loading: false,
  },

  getters: {
    notifications: state => {
      return state.notifications
    },
    getNotificationById: (state) => (id) => {
      return state.notifications.find(notification => notification.id === id)
    },
    notificationLoading: state => {
      return state.loading
    }
  },

  mutations: {
    cleanNotifications: (state) =>{
      state.notifications = []
    },
    addNotification: (state, payload) => {
      state.notifications.push({...payload})
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },

  },

  actions: {

    addNotification: (context, payload) => {
      context.commit('setLoading', true)
      axios.post("notifications",{
        type: payload.type,
        title: payload.title,
        createdAt: payload.createdAt
      })
      .then(response => {
        context.commit('addNotification', payload)
        context.commit('setLoading', false)
      })
      .catch(error => {
        console.log(error)
        context.commit('setLoading', false)
      })
    },

    getAllNotifications: (context) => {
      context.commit('setLoading', true)
      axios.get("notifications")
      .then(response => {
        context.commit('cleanNotifications')
        response.data.forEach( item => {
          context.commit('addNotification', item)
        })
        context.commit('setLoading', false)
      })
      .catch(error => {
        context.commit('setLoading', false)
        console.log(error)
      })
    }

  }
}
