import Solt from '@/components/solt';
<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <!-- 错误信息 -->
    <p v-if="error" class="error">{{error}}</p>
    <!-- <p>{{from.rules[prop]}}</p> -->
  </div>
</template>

<script>
  import Validator from 'async-validator';

  export default {
    inject:['from'],
    data(){
      return{
        error: ''
      }
    },
    props: {
      label:{
        type:String,
        default: ''
      },
      prop: String
    },
    mounted(){
      this.$on('validate',()=>{
        this.validate();
      })
    },
    methods:{
      validate(){
        // 校验规则
        const rules = this.from.rules[this.prop];
        // console.log(rules)

        // 当前值
        const value = this.from.model[this.prop];
        // console.log(value)


        // 创建一个校验器实例
        const validate = new Validator({ [this.prop]: rules });
        // 校验, 返回Promise
        return validate.validate({ [this.prop]: value}, errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .error{
    color: rebeccapurple;
  }
</style>
