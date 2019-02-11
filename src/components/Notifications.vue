<template>
  <div class="notifications" v-loading="notificationLoading">
    <h2>Notifications</h2>
    <NotificationItem v-for="(notification,index) in notifications" :key="notification.index" :notification="notification"></NotificationItem>

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import NotificationItem from '../components/NotificationItem'

export default {
  name: 'Notifications',
  components: {
    NotificationItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('notifications',[
      "notifications",
      "notificationLoading"
    ])
  },
  methods: {
    ...mapActions('notifications',[
      "getAllNotifications"
    ])
  },
  mounted: function () {
    this.getAllNotifications()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
