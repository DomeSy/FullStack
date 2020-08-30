# FullStack
全栈旅程

## Vue
  Vue之旅
  
  ### 01-Component
    组件通信，props，事件总线，vuex，$parent/$root，$children，$attrs/$listeners，refs，provide/inject
    插槽的使用： 匿名插槽，具名插槽，作用域插槽
    实现Element表单，
      1>实现KForm
        制定数据model、校验规则rules
        校验validate()
      2>KFormItem
        label标签添加：label
        prop属性名称
        执行校验validate()
        显示错误信息
       3>KInput
        维护数据v-model
        图标、反馈
     实现弹框组件
      挂载到body上
        首先用$mount() 挂载
        然后用document.body.appendChild(vm.$el)挂载到body上
        不是用的时候移除并销毁
          document.body.removeChild(vm.$el)
          vm.$destroy()
      实现树形结构

  ### 02-FamilyBucket
    vue全家桶 实现  核心原理：实现一个插件，用install方法，然后用Vue.use,最后挂载
      vueRouter 手写实现
      vuex 手写实现
