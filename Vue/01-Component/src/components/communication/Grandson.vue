<template>
  <div @click="$emit('some-event','msg from grandson')">
    <h3>grandson</h3>
    <p>msg</p>

    <!-- inject -->
    <p>{{foo1}}</p>
  </div>
</template>

<script>
  export default {
    // inject: ['foo'],
    inject: {
      foo1: {
        from: 'foo'
      }
    },
    created(){
      // console.log(this.foo)
    },
    props: {
      msg: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
