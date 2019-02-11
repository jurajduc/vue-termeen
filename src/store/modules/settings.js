import axios from "axios"

export default{

  namespaced: true,
  state: {
    settings: [],
    loading: false,
  },

  getters: {
    settings: state => {
      return state.settings
    },
    getSettingById: (state) => (id) => {
      return state.settings.find(setting => setting.id === id)
    },
    settingLoading: state => {
      return state.loading
    }
  },

  mutations: {
    cleanSettings: (state) =>{
      state.settings = []
    },
    addSetting: (state, payload) => {
      state.settings.push({...payload})
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },

  },

  actions: {

    addSetting: (context, payload) => {
      context.commit('setLoading', true)
      axios.post("settings",{
        title: payload.title,
        start: payload.start
      })
      .then(response => {
        context.commit('addSetting', payload)
        context.commit('setLoading', false)
      })
      .catch(error => {
        console.log(error)
        context.commit('setLoading', false)
      })
    },

    getAllSettings: (context) => {
      context.commit('setLoading', true)
      axios.get("settings")
      .then(response => {
        context.commit('cleanSettings')
        response.data.forEach( item => {
          context.commit('addSetting', item)
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
