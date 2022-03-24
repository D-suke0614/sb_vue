<template>
  <div>{{ msg }}</div>
  <button v-on:click="$emit('ChildClick')">Click me</button>
</template>

<script>
export default {
  name: 'ChildComp1',
  props: {msg: String},
}
</script>
