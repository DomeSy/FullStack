<template>
  <div>
    <!-- 组件通信 -->
    <!-- <Communication ></Communication> -->

    <!-- 插槽 -->
    <!-- <Solt></Solt> -->

    <!-- Element表单 -->
    <!-- <ElementTest ></ElementTest> -->

    <!-- 树形组件 -->
    <Recursion></Recursion>
  </div>
</template>

<script>
  import Communication from '@/components/communication';
  import Solt from  '@/components/solt';
  import ElementTest from '@/components/form';
  import Recursion from '@/components/recursion';

  export default {
    name: 'Index',
    props:{
      name: String
    },
    components:{
      Communication,
      Solt,
      ElementTest,
      Recursion
    }
  }
</script>

<style lang="scss" scoped>

</style>
