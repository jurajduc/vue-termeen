<template>
  <!-- <DraggableCal /> -->
  <v-container fluid style='padding: 0px;' >
    <v-slide-y-transition mode="out-in">

      <v-layout align-space-around row fill-height>

        <v-flex xs2 style="position:fixed; width: 96px; z-index: 3; overflow: scroll">
        <v-card>
          <v-card-text>somethin is here and lets see how it behaves</v-card-text>
          <div style='height: 1000px; width: 20px;'>
          <DayPicker/>
          </div>
        </v-card>
      </v-flex>


      <!-- -->
      <v-flex  xs9 offset-xs2 v-loading="appointmentLoading">
        <!--<div style="width:100%; overflow: scroll; position:fixed; z-index: 1; background: #fafafa">
          <div style="width: 2000px">
          <TeamMember /> <TeamMember /> <TeamMember />
          </div>
        </div>-->
        <!-- <v-card dark tile flat color="red lighten-1"> -->
        <div>  <!-- style="margin-top: 80px;" -->
            <!-- <v-card-text>Tue 9.Oct 2018</v-card-text> -->
            <Appointment
              v-for="(appointmentItem, index) in appointments"
              v-on:appointment-clicked="showAppointmentDetail"
              :appointment="appointmentItem"
              :key="index"/>
        </div>

      </v-flex>
      </v-layout>
    </v-slide-y-transition>



    <AppointmentForm
      :dialog="dialog"
      @add-appointment="addAppointment"/>

    <AppointmentDetail
      :visible="appointmentDetailVisible"
      :appointment="currentAppointment"
      @close="closeAppointmentDetail"/>

  </v-container>
</template>
<script>

import DayPicker from '../components/DayPicker'
import AppointmentForm from '../components/AppointmentForm'
import TeamMember from '../components/calendar/TeamMember'
import Appointment from '../components/calendar/Appointment'
import AppointmentDetail from '../components/calendar/AppointmentDetail'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Appointment,
    AppointmentDetail,
    DayPicker,
    AppointmentForm,
    TeamMember,
  },
  data() {
    return {
      dialog: false,
      appointmentDetailVisible: false,
      currentAppointment: {},
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      posts: [],
      errors: []
    }
  },
  computed: {
    ...mapGetters('appointments',[
      "appointments",
      "appointmentLoading",
      "getAppointmentById"
    ]),
    ...mapGetters('settings',[
      "settings",
      "settingsLoading"
    ]),
    ...mapGetters('services',[
      "services",
      "servicesLoading"
    ])
  },
  methods: {

    ...mapActions('appointments',[
      "addAppointment",
      "getAllAppointments",
    ]),
    ...mapActions('services',[
      "getAllServices"
    ]),
    showAppointmentDetail(appointmentId){
      //this.dialog = !this.dialog

      console.log("showAppointmentDetail ...")
      const appointment = this.getAppointmentById(appointmentId)
      this.currentAppointment = appointment
      this.$router.push({name: 'CalendarAppointment', params:{ appointmentId: appointment._id  }})
      this.appointmentDetailVisible = true
    },
    closeAppointmentDetail(){
      this.$router.push({name: 'Calendar'})
      this.appointmentDetailVisible = false
    },


  },
  created() {
    console.log( this.$route.name )
    if( this.$route.name === "CalendarAppointment"){

      console.log('listening?')
      this.getAllAppointments()
      .then( () => {
        console.log("resolved???")
        this.showAppointmentDetail(this.$route.params.appointmentId)
      })

    }
    else{
      this.getAllAppointments()
    }

    this.getAllServices()
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
