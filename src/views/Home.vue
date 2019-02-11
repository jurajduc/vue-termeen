<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        {{dev}}
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      devData: [
        {
          name: 'Riley Hawk',
          gender: 'male'
        },
        {
          name: 'Tony Hawk',
          age: 49,
          gender: 'male'
        },
        {
          name: 'Dylan Rieder',
          age: 28,
          gender: 'male'
        },
        {
          name: 'Diana Smith',
          age: 25,
          gender: 'female'
        },
        {
          name: 'Anthony Smith',
          age: 32,
          gender: 'male'
        },
        {
          name: 'cf-u4937593',
          age: 21,
          gender: 'borg'
        },
      ]
    }
  },
  computed: {
    dev: function () {
    }
  },
  methods: {

    devMethod: function(array, ageStart=30, ageEnd=40, groupByProperty='gender'){
      if(!Array.isArray(array)) throw new TypeError('Wrong argument: Array expected, ' + typeof array + ' recieved');

      return array.reduce(function (acc, item) {
        acc[item[groupByProperty]] = acc[item[groupByProperty]] || [];
        if(item.age >= ageStart && item.age <= ageEnd) acc[item[groupByProperty]].push(item);
        return acc;
      }, Object.create(null));
    }
  },

  created() {
    var r = this.devMethod(this.devData)
    console.log(r)
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
