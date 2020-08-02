<template>
  <div>
    <h3>child2</h3>
    <!-- $attrs: 只要是没有被props声明都会在$attrs中 -->
    <p>{{$attrs.msg}}</p>
    <!-- 隔代传参 v-bind会展开$attrs-->
    <Grandson v-bind="$attrs" v-on="$listeners"/>


    <!-- <button @click="sentToChild1">给child1发消息</button> -->
  </div>
</template>

<script>
  import  Grandson from '@/components/communication/Grandson'
  export default {
    created(){
      // console.log(this.$attrs)
    },
    components:{
      Grandson
    },
    methods:{
      sentToChild1(){
        // 利用事件总线发送消息
        this.$bus.$emit('event-from-child2', 'some msg from child2')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
