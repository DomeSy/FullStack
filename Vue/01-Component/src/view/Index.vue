<template>
  <div>
    <!-- 组件通信 -->
    <!-- <Communication ></Communication> -->

    <!-- 插槽 -->
    <!-- <Solt></Solt> -->

    <!-- Element表单 -->
    <!-- <ElementTest ></ElementTest> -->

    <!-- 树形组件 -->
    <!-- <Recursion></Recursion> -->

    <!-- 混合对象 -->
    <Mixins></Mixins>
  </div>
</template>

<script>
  import Communication from '@/components/communication';
  import Solt from  '@/components/solt';
  import ElementTest from '@/components/form';
  import Recursion from '@/components/recursion';
  import Mixins from '@/components/mixins';

  export default {
    name: 'Index',
    props:{
      name: String
    },
    components:{
      Communication,
      Solt,
      ElementTest,
      Recursion,
      Mixins
    }
  }
</script>

<style lang="scss" scoped>

</style>
