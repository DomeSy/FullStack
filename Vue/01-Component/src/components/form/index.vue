<template>
  <div>
    <h1>表单</h1>

    <!-- KForm:制定管理数据和校验规则 -->
    <!-- KFormItem：数据校验和错误展示 -->
    <k-from :model="model" :rules="rules" ref="loginForm">
      <!-- 这里的prop是确定拿的值，进行匹配，用与校验 -->
      <k-from-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入账户"></k-input>
      </k-from-item>
      <k-from-item label="密码" prop="password">
        <k-input v-model="model.password" placeholder="请输入密码" type="password" ></k-input>
      </k-from-item>
    </k-from>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import KInput from '@/components/form/KInput'
  import KFromItem from '@/components/form/KFromItem'
  import KFrom from '@/components/form/Kfrom'

  import Notice from '@/view/Notice'
  import create from '@/utils/create'


  export default {
    components: {
      KInput,
      KFromItem,
      KFrom
    },
    data(){
      return{
        model: {
          username: 'tom',
          password: ''
        },
        rules:{
          username: [{required: true, message:'必须输入用户名'}],
          password: [{required: true, message:'必须输入密码'}]
        }
      }
    },
    methods: {
      // 全局校验
      login() {
        this.$refs.loginForm.validate(isValid => {

          create(Notice, {
            title: '我是Domesy',
            message: isValid ? '请求登录' : '校验失败'
          }).show()

          // if(isValid){
          //   console.log('提交登录')
          // }else{
          //   alert('登录失败')
          // }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
