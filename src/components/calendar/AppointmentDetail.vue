<template>
  <div class="appointment-detail">
    <el-dialog
      title="Appointment detail"
      :visible.sync="visible"
      width="90%"
      center>
  <span>{{appointment.title}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="close">Close</el-button>
  </span>
</el-dialog>


  </div>
</template>

<script>
export default {
  name: 'AppointmentDetail',
  props: ["appointment","visible"],
  methods:  {
    close(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">


</style>
