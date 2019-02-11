<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

        This is HELP

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>

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
</style>
