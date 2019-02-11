<template>
  <div>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow">

        <v-tab>General</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h2>Practice info</h2>
              <v-form v-model="valid">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Practice name"
                  required
                ></v-text-field>

                  <v-text-field
                    v-model="address"
                    :rules="nameRules"
                    label="Address"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="address"
                    :rules="nameRules"
                    label="City"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="address"
                    :rules="nameRules"
                    label="Zip Code"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="address"
                    :rules="nameRules"
                    label="Country"
                    required
                  ></v-text-field>


                  <v-text-field
                    v-model="address"
                    :rules="nameRules"
                    label="Phone"
                    required
                  ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>


                <v-text-field v-model="address" :rules="nameRules" label="Website" required></v-text-field>

                <v-btn :disabled="!valid" @click="submit">Save</v-btn>
              </v-form>

            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab>Team</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h2>Team members</h2>
              <v-data-table
                :headers="teamMembersHeaders"
                :items="teamMembers"
                class="elevation-1"
              >
                <template slot="headerCell" slot-scope="props">
                    <span slot="activator">
                      {{ props.header.text }}
                    </span>

                </template>
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.role }}</td>
                  <td class="text-xs-right">{{ props.item.servicesCount }}</td>
                  <td class="text-xs-right">{{ props.item.availableOnline }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab>Services</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-data-table
                :headers="servicesHeaders"
                :items="services"
                class="elevation-1"
              >
                <template slot="headerCell" slot-scope="props">
                    <span slot="activator">
                      {{ props.header.text }}
                    </span>

                </template>
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.duration }}</td>
                  <td class="text-xs-right">{{ props.item.teamCount }}</td>
                  <td class="text-xs-right">{{ props.item.availableOnline }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- <v-tab>Resources</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>this is the text</v-card-text>
          </v-card>
        </v-tab-item> -->

        <v-tab>Booking</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>

              <h2>Booking settings</h2>
              <v-form v-model="valid">

                <v-select
                  :items="items"
                  label="Booking period"
                ></v-select>

                <v-select
                  :items="items"
                  label="Booking availibility"
                ></v-select>

                <v-select
                  :items="items"
                  label="Booking cancelation period"
                ></v-select>

                Booking approval
                <v-radio-group v-model="radioGroup" row>
                  <v-radio
                    :label="`Automatic`"
                    :value="2"
                  ></v-radio>
                  <v-radio
                    :label="`Manual`"
                    :value="3"
                  ></v-radio>
                </v-radio-group>


                Patient authentication
                <v-radio-group v-model="radioGroup">
                  <v-radio
                    :label="`Email Authenctication`"
                    :value="2"
                  ></v-radio>
                  <v-radio
                    :label="`SMS Authentication`"
                    :value="3"
                  ></v-radio>
                  <v-radio
                    :label="`No Authentication`"
                    :value="4"
                  ></v-radio>
                </v-radio-group>


                <v-switch
                  :label="`Show all doctors in doctor selection`"
                  v-model="switch1"
                ></v-switch>


                <v-select
                  :items="items"
                  label="Time for authentication"
                ></v-select>

                <v-btn :disabled="!valid" @click="submit">Save</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>


        <v-tab>Notifications</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h2>Patient reminders</h2>
              <v-form>

                <v-select
                  :items="items"
                  label="Automatic reminder for patient"
                ></v-select>


                <v-select
                  :items="items"
                  label="When should the reminder be sent"
                ></v-select>

                <v-btn :disabled="!valid" @click="submit">Save</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab>Integration</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>this is the text</v-card-text>
          </v-card>
        </v-tab-item>

      </v-tabs>

      <!-- <div class="text-xs-center mt-3">
        <v-btn @click="next">next tab</v-btn>
      </div> -->
    </div>
</template>
<script>
// import axios from 'axios';

export default {
  data() {
    return {
      teamMembersHeaders: [
          { text: 'Name', value: 'name'},
          { text: 'Role', value: 'role'},
          { text: 'Number of services', value: 'servicesCount'},
          { text: 'Available online', value: 'availableOnline'},
        ],
      teamMembers: [
        { name: "Dr. James Martin", role: "Administrator", servicesCount: 3, availableOnline: true },
        { name: "Dr. Lewis Henderson", role: "Employee", servicesCount: 4, availableOnline: true },
        { name: "Dr. Milan Markusich", role: "Employee", servicesCount: 3, availableOnline: true },
        { name: "Dr. Anthony Miller", role: "Employee", servicesCount: 1, availableOnline: false },
      ],
      servicesHeaders: [
          { text: 'Name', value: 'name'},
          { text: 'Duration', value: 'duration'},
          { text: 'Team members', value: 'teamCount'},
          { text: 'Available online', value: 'availableOnline'},
        ],
      services: [
        { name: "First appointment", duration: '30 min', teamCount: 2, availableOnline: true},
        { name: "Dental hygiene", duration: '30 min', teamCount: 3, availableOnline: true},
        { name: "Prothetics", duration: '20 min', teamCount: 3, availableOnline: true},
        { name: "Check up", duration: '10 min', teamCount: 3, availableOnline: true},
      ],
      resources: [],
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 3 || 'Name must be less than 3 characters'
      ],
      items: ['first','second'],

      address: '',
      radioGroup: 1,
      switch1: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      posts: [],
      errors: []
    }
  },

  created() {
    console.log(' dev api ...')
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
