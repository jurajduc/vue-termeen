<template>
  <div class="notification-item">
    <el-tag size="mini">{{notification.type}}</el-tag> by {{notification.title}}
    <div class="notification-created-at">
      {{notification.createdAt | formatDate}}
    </div>

    <div class="appointment-data">
      <div>
        <span class="appointment-date-time">12.1.2019</span>
        <span class="appointment-duration">(30min)</span>
      </div>

      <div>
        <span class="appointment-title">Prothetik</span> at
        <span class="patient-name">Mr. Thomas Harrisson</span>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NotificationItem',
  props: ['notification'],
  filters: {
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format('DD.MM.YYYY HH:mm')
                }
            },
            formatDateOnly: function (value) {
                if (value) {
                    return moment(String(value)).format('DD.MM.YYYY')
                }
            },
          }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.notification-item{
  border-bottom: 1px solid #efefef;
  padding: 10px;
}

.notification-created-at{

}
</style>
