<template>
  <div class="topPage">
    <h2>TopPage</h2>
    <div>{{ storeCount }}</div>
    <div>Squared : {{ $store.getters.squared }}</div>
    <div>Cube : {{ $store.getters.cube }}</div>
  </div>
</template>

<script>
export default {
  name :'TopPage',
  computed: {
    storeCount: function() {
      return this.$store.state.count
    }
  }
}
</script>
