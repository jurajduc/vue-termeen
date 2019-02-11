<template>
  <div >

    <div v-on:click="appointmentClicked">
    <v-card dark tile flat color="red lighten-1" style="" class="appointment-item">
      <v-card-text>
        12:30<br />
        <strong>{{appointment.title}}</strong><br />
        <span style='font-size: 80%;'></span>
      </v-card-text>
    </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  props: ["appointment"],
  methods:  {
    appointmentClicked(){
      console.log('appointmentClicked')
      this.$emit('appointment-clicked',this.appointment.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.appointment-item{
  margin:20px;
  padding: 20px 30px;
  border-radius: 20px;
  cursor: pointer;

}


</style>
