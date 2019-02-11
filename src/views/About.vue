<template>
  <div class="about">
    <h1>This is an about page OMG</h1>
  </div>
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

  // Fetches posts when the component is created.
  created() {
    console.log(' dev api here ...')
    // axios.defaults.baseURL = 'http://localhost/api/v1';
    // axios.defaults.headers['Content-Type'] = 'multipart/form-data'

    var data = new FormData();
    data.set('username', 'api@jurajduc.com')
    data.set('password', 'Nji9mko0')

    axios.post('http://localhost/api/v1/auth', data,
    {
      withCredentials: true
    })
    .then(response => {
      console.log('response')
      console.log( response.data )

      let token = response.data.token
      console.log('token ...')
      console.log( token )


      var session_url = 'http://localhost/api/v1/appointment'
      axios.get(session_url, {
        auth: {
          username: token,
          password: null
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        withCredentials: true
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      });





    })
    .catch(e => {
      this.errors.push(e)
    })


  }
}
</script>
