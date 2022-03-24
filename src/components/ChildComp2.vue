<template>
  <div>{{ msg }}</div>
  <input type="number" v-model="num1">×
  <input type="number" v-model="num2">=
  {{ resultNum }}
</template>

<script>
export default {
  name: 'ChildComp2',
  props: {msg: String},
  data: function() {
    return {
      num1:0,
      num2:0,
    }
  },
  computed: {
    resultNum: function() {
      return this.num1 * this.num2
    }
  }
}
</script>
