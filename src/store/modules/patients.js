import axios from "axios"

export default{

  namespaced: true,
  state: {
    patients: [],
    loading: false,
  },

  getters: {
    patients: state => {
      return state.patients
    },
    getPatientById: (state) => (id) => {
      return state.patients.find(patient => patient.id === id)
    },
    patientLoading: state => {
      return state.loading
    }
  },

  mutations: {
    cleanPatients: (state) =>{
      state.patients = []
    },
    addPatient: (state, payload) => {
      state.patients.push({...payload})
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },

  },

  actions: {

    addPatient: (context, payload) => {
      context.commit('setLoading', true)
      axios.post("patients",{
        title: payload.title,
        start: payload.start
      })
      .then(response => {
        context.commit('addPatient', payload)
        context.commit('setLoading', false)
      })
      .catch(error => {
        console.log(error)
        context.commit('setLoading', false)
      })
    },

    getAllPatients: (context) => {
      context.commit('setLoading', true)
      axios.get("patients")
      .then(response => {
        context.commit('cleanPatients')
        response.data.forEach( item => {
          context.commit('addPatient', item)
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
