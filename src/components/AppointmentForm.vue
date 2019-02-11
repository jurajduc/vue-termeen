<template>
  <div>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Appointment
        </v-card-title>
        <v-container grid-list-sm class="">
          <v-layout row wrap>



            <el-form :model="appointmentForm" :rules="addAppointmentRules" ref="addAppointmentForm">



              <el-form-item label="Title" prop="title">
                <el-input v-model="appointmentForm.title" style="width:100%"></el-input>
              </el-form-item>

              <el-form-item>
                <el-select v-model="appointmentForm.teamMember" placeholder="Select">
                  <el-option
                    v-for="item in teamMembers"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    <span style="float: left;margin-right: 10px;">
                      <img
                        src="https://pbs.twimg.com/profile_images/965934931389149184/yBrw1N23_400x400.jpg"
                        style="width:30px; height:30px;border-radius: 50px;" />
                    </span>
                    <span style="color: #8492a6; font-size: 13px">{{ item.name }}</span>
                  </el-option>
                </el-select>
              </el-form-item>



              <el-form-item label="Activity time" prop="start">

                    <el-date-picker type="date" placeholder="Pick a date" v-model="appointmentForm.start" style="width: 100%;"></el-date-picker>

              </el-form-item>







            </el-form>


          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = !dialog">Cancel</v-btn>
          <v-btn flat @click="addAppointmentClicked">Add appointment</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="openAppointmentForm"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AppointmentForm',

  data() {
    return {
      dialog: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      teamMembers: [{
        id: 1,
        img: "",
        name: "Connor McGregor",
      }, {
        id: 2,
        img: "",
        name: "Gregor O'Connor",

      }],
      appointmentForm:{
        title: '',
        start: '',
        teamMember: '',
      },
      addAppointmentRules: {
        "title": [{
          required: true,
          message: 'Please select product',
          trigger: 'blur'
        }],
        "start": [{
          type:     "date",
          required: true,
          message:  "Please active from date",
          trigger:  "blur",
        }],
      },
    }
  },
  methods: {
    click() {
      console.log('omg ...')
    },
    openAppointmentForm(){
      this.dialog = true
      this.$refs["addAppointmentForm"].resetFields();

    },
    addAppointmentClicked(){

      this.$refs["addAppointmentForm"].validate((valid) => {
        if (valid) {
          console.log('is valid ...')
          console.log(this.appointmentForm)
          this.$emit('add-appointment', this.appointmentForm )
          this.dialog = false
        } else {
          console.log('error submit!!')
          return false;
        }
      })
  },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.day-item{
  padding: 10px;
}

</style>
