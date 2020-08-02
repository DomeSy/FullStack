import Vue from 'vue'

// Component - 组件配置对象
// props -传递给他的属性
export default function create(Component, props) {

  // 1>构建Component的实例
  const vm = new Vue({
    render(h){
      // h是createElement函数，可以返还一个vnode，即JS对象，因为是虚拟，所以必须要挂载
      return h(Component, { props })
    }
    // $mount手动挂载，可以挂载到元素上
  }).$mount()  // 不设置挂载目标，依旧可以转换vnode为真是节点$el

  // 2>挂载到body上
  document.body.appendChild(vm.$el)

  // 3>获取组件实例
  const comp = vm.$children[0]

  // 当不需要的时候取消占用的资源
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    // $destroy()手动销毁
    vm.$destroy()
  }
  return comp
}
