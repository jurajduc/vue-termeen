import axios from "axios"

export default{

  namespaced: true,
  state: {
    appointments: [],
    loading: false,
  },

  getters: {
    appointments: state => {
      return state.appointments
    },
    getAppointmentById: (state) => (id) => {
      return state.appointments.find(appointment => appointment._id === id)
    },
    appointmentLoading: state => {
      return state.loading
    }
  },

  mutations: {
    cleanAppointments: (state) =>{
      state.appointments = []
    },
    addAppointment: (state, payload) => {
      state.appointments.push({...payload,id: payload._id})
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },

  },

  actions: {

    addAppointment: (context, payload) => {
      context.commit('setLoading', true)
      axios.post("appointments",{
        title: payload.title,
        start: payload.start
      })
      .then(response => {
        console.log(response)
        context.commit('addAppointment', payload)
        context.commit('setLoading', false)
      })
      .catch(error => {
        console.log(error)
        context.commit('setLoading', false)
      })
    },

    getAllAppointments: (context, page) => {

      const pageSize = 15;
      const skip = pageSize * ( page - 1);

      console.log('getAllAppointments');
      console.log('page: ', page);
      console.log('skip', skip);

      context.commit('setLoading', true)
      
      return axios.get("appointments",{
        params: {
          max: pageSize,
          skip: skip,
        }
      })
      .then(response => {
        // context.commit('cleanAppointments')
        response.data.forEach( item => {
          context.commit('addAppointment', item)
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
