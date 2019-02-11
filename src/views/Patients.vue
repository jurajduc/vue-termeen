<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center v-loading="patientLoading">
        <PatientSearch />
        <Patient v-for="(patient) in patients" :key="patient.id" :patient="patient" />

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>

import Patient from '../components/patients/Patient'
import PatientSearch from '../components/patients/PatientSearch'


import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Patient,
    PatientSearch,
  },
  data() {
    return {
      errors: []
    }
  },
  computed: {
    ...mapGetters('patients',[
      "patients",
      "patientLoading"
    ]),
  },
  methods: {

    ...mapActions('patients',[
      "addPatient",
      "getAllPatients"
    ]),

  },

  created() {
    console.log(' dev api ...')
    this.getAllPatients()
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
