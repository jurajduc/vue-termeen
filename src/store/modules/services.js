import axios from "axios"

export default{

  namespaced: true,
  state: {
    services: [],
    loading: false,
  },

  getters: {
    services: state => {
      return state.services
    },
    getServiceById: (state) => (id) => {
      return state.services.find(service => service.id === id)
    },
    serviceLoading: state => {
      return state.loading
    }
  },

  mutations: {
    cleanServices: (state) =>{
      state.services = []
    },
    addService: (state, payload) => {
      state.services.push({...payload})
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },

  },

  actions: {

    addService: (context, payload) => {
      context.commit('setLoading', true)
      axios.post("services",{
        title: payload.title,
        start: payload.start
      })
      .then(response => {
        context.commit('addService', payload)
        context.commit('setLoading', false)
      })
      .catch(error => {
        console.log(error)
        context.commit('setLoading', false)
      })
    },

    getAllServices: (context) => {
      context.commit('setLoading', true)
      axios.get("services")
      .then(response => {
        context.commit('cleanServices')
        response.data.forEach( item => {
          context.commit('addService', item)
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
