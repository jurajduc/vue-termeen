import axios from "axios"

export default{

  namespaced: true,
  state: {
    notications: [],
    loading: false,
  },

  getters: {
    teamMembers: state => {
      return state.teamMembers
    },
    getTeamMemberById: (state) => (id) => {
      return state.teamMembers.find(teamMember => teamMember.id === id)
    },
    teamMemberLoading: state => {
      return state.loading
    }
  },

  mutations: {
    cleanTeamMembers: (state) =>{
      state.teamMembers = []
    },
    addTeamMember: (state, payload) => {
      state.teamMembers.push({...payload})
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },

  },

  actions: {

    addTeamMember: (context, payload) => {
      context.commit('setLoading', true)
      axios.post("teamMembers",{
        title: payload.title,
        start: payload.start
      })
      .then(response => {
        context.commit('addTeamMember', payload)
        context.commit('setLoading', false)
      })
      .catch(error => {
        console.log(error)
        context.commit('setLoading', false)
      })
    },

    getAllTeamMembers: (context) => {
      context.commit('setLoading', true)
      axios.get("teamMembers")
      .then(response => {
        context.commit('cleanTeamMembers')
        response.data.forEach( item => {
          context.commit('addTeamMember', item)
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
