<template>
  <div>{{ msg }}</div>
  <button v-on:click="$emit('ChildClick')">Click me</button>
  <p><slot name="msgA"/></p>
  <p><slot name="msgB"/></p>
  <p><slot name="msgC"/></p>
</template>

<script>
export default {
  name: 'ChildComp1',
  props: {msg: String},
}
</script>
