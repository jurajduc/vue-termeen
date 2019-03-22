 /* eslint-disable */
<template>
  <div v-loading="appointmentLoading">
    <div class='appointment-list' style='padding-left: 70px;'>
      <Appointment
        v-for="(appointmentItem, index) in appointments"
        v-on:appointment-clicked="showAppointmentDetail"
        :appointment="appointmentItem"
        :key="index"/>
    </div>

    <AppointmentForm
      :dialog="dialog"
      @add-appointment="addAppointment"/>

    <AppointmentDetail
      :visible="appointmentDetailVisible"
      :appointment="currentAppointment"
      @close="closeAppointmentDetail"/>
  </div>
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
      currentPage: 1,
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





    scroll () {
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        console.log('on the bottom');
        this.currentPage++;
        this.getAllAppointments(this.currentPage);
        // axios.get(`https://randomuser.me/api/`)
        //   .then(response => {
        //     person.push(response.data.results[0]);
        //   });
      }
    };
  },


  },
  created() {
    this.scroll();
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
      this.getAllAppointments(this.currentPage);
    }

    this.getAllServices();
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
