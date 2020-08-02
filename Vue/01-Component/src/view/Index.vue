<template>
  <div>
    <!-- 组件通信 -->
    <!-- <Communication ></Communication> -->

    <!-- 插槽 -->
    <!-- <Solt></Solt> -->

    <!-- Element表单 -->
    <ElementTest ></ElementTest>


  </div>
</template>

<script>
  import Communication from '@/components/communication';
  import Solt from  '@/components/solt';
  import ElementTest from '@/components/form'

  export default {
    name: 'Index',
    props:{
      name: String
    },
    components:{
      Communication,
      Solt,
      ElementTest
    }
  }
</script>

<style lang="scss" scoped>

</style>
