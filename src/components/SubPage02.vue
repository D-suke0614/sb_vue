<template>
  <div class="page02">
    <h2>Page02</h2>
    <h2>Axios Ajax</h2>
    <div>
      <label>User ID</label>
      <input type="text" v-model="userId">
      <button @click="getUserName">Search</button>
    </div>
    <div>User ID: {{ userId }}</div>
    <div>Name : {{ userName }}</div>
  </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users/'

export default {
  name: 'SubPage02',
  data: function () {
    return {
      userId: '',
      userName: '',
    }
  },
  methods: {
    getUserName: function() {
      var vm = this
      axios.get(url+ this.userId)
      .then(function(respons) {
        vm.userName = respons.data.name
      }).catch(function() {
        vm.userName = '不正なID'
      })
    }
  },
  watch: {
    userId: function() {
      this.getUserName()
    }
  },
}
</script>
