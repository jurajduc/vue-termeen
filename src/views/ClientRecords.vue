<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

        This is settings

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
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
