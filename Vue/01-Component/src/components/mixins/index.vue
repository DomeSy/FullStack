<template>
  <div>
    <h2>Mixins</h2>

  </div>
</template>

<script>
  import { mixins } from '@/assets/js/mixins'
  export default {
    mixins: [mixins],
    created(){
      this.foo()
    },
    methods: {
      bar: function () {
        console.log('bar')
      },
      conflicting: function () {
        console.log('from self')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
