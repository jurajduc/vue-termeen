<template>
  <div>
    <div v-for="(item, index) in items" :key="index" >
      <hr v-if="item.day ==='Mon'" />
      <div class="day-item">
        <div class='day'>{{item.day}}</div>
        <div class='date'>{{item.date}}</div>
        <div class='month'>{{item.month}}</div>
      </div>
    </div>


  </div>
</template>

<script>
import moment from "moment"
export default {
  name: 'DayPicker',
  props: {
    msg: String
  },
  data() {
    return {
      items: []
    }
  },
  mounted(){
    var currentDate = moment();
    for (var i = 0; i < 360; i++) {
      var next = moment(currentDate).add(i, 'd')
      this.items.push({
        day: next.format('ddd'),
        date: next.format('DD'),
        month: next.format('MMM')
      })
    }
  },
  methods: {
    click() {
      console.log('omg ...')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.day-item{
  text-align: center;
  padding: 5px;
  color: #333;
  // background-color: #efefef;
  width: 70px;
  height: 70px;
  margin: 10px 4px 4px 4px;
  // border-radius: 400px;
}

.day{
  font-size: 80%;

}

.date{
  font-size: 120%;
  font-weight: bold;
}

.month{
font-size: 80%;
}

</style>
