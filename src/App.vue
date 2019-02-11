<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading" :to="item.route">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :to="item.children.route"
              :key="i"

            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text"  :to="item.route">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">EpiCalendar</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon @click.stop="right = !right">notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>


            <router-view/>


    </v-content>


    <v-navigation-drawer
     v-model="right"
     right
     app
     fixed>
      <Notifications />
    </v-navigation-drawer>



  </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      // drawer: true,
      fixed: false,
      // items: [{
      //   icon: 'bubble_chart',
      //   title: 'Inspire'
      // }],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js',

      dialog: false,
      drawer: null,
      items: [
        { icon: 'calendar_today', text: 'Calendar', route: '/calendar' },
        // { icon: 'history', text: 'Frequently contacted' },
        // { icon: 'content_copy', text: 'Duplicates' },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'add', text: 'Create label' }
        //   ]
        // },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'More',
        //   model: false,
        //   children: [
        //     { text: 'Import' },
        //     { text: 'Export' },
        //     { text: 'Print' },
        //     { text: 'Undo changes' },
        //     { text: 'Other contacts' }
        //   ]
        // },
        { icon: 'chat_bubble', text: 'Patients', route: '/patients' },
        { icon: 'settings', text: 'Settings', route: '/settings' },
        // { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help', route: '/help' },
        // { icon: 'phonelink', text: 'App downloads' },
        // { icon: 'keyboard', text: 'Go to the old version' }
      ]
    }
  },
  computed: {
    ...mapGetters('settings',[
      "settings",
      "settingsLoading"
    ])
  },
  methods: {
    ...mapActions('settings',[
      "getAllSettings"
    ]),
    appointmentClicked(){
      this.dialog = !this.dialog
    }
  },
  created() {
    this.getAllSettings()
  }
}
</script>
<style>
    * {
        font-family: "Roboto"
    }

    nav {
        z-index: 4;
    }
</style>
