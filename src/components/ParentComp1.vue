<template>
  <div class="parent">
    <ChildComp1 msg="あいうえお" v-on:ChildClick="parentMethodA"/>
    <ChildComp2 msg="ABCDE"/>
    <ChildComp3 msg="12345"/>
  </div>
</template>

<script>
  import ChildComp1 from '@/components/ChildComp1.vue';
  import ChildComp2 from '@/components/ChildComp2.vue';
  import ChildComp3 from '@/components/ChildComp3.vue';

export default {
  name: 'ParentComp',
  components: {
    ChildComp1,
    ChildComp2,
    ChildComp3,
  },
  methods: {
    parentMethodA() {
      alert('ParentEvent');
    }
  },
}
</script>
