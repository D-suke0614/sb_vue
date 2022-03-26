<template>
  <div class="page01">
    <h2>Page01</h2>
    <h2>Store Count</h2>
    <div>{{ storeCount }}</div>
    <div>
      <!-- <button v-on:click.self="$store.commit('increment')">
        Increment Button
      </button> -->
      <input type="text" v-model="amountNum">
      <button v-on:click.self="amount">
        Input & Increment Count
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubPage01',
  computed: {
    storeCount: function() {
      return this.$store.state.count
    }
  },
  data: function() {
    return {
      amountNum: 0,
    }
  },
  methods: {
    amount: function() {
      this.$store.commit(
        'increment', { amount: Number(this.amountNum) }
      )
    }
  }
}
</script>
