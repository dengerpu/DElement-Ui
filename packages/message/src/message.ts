import { ImessageOptions } from "./message.type"
import MessageComponent from "./messageComponent.vue"
import { createVNode, render } from "vue";

let instance : any[] = [] // 保存实例
export default function Message(options: ImessageOptions) {
  console.log("message");
  if(typeof options === "string") {
    options: {
      message: options
    }
  }

  // 添加一个offset
  let offset = options.offset || 20;
  instance.forEach(item => {
    console.log("组件实例", item)
    offset += 60
  })

  // 处理 清除元素
  let userClose = options.close;
  const container = document.createElement("div");

  let ops = {
    ...options,
    offset,
    // 添加事件
    onclose: () => {
      console.log("关闭事件前执行的操作")
      userClose?.()
    },
    onDestroy: () => {
      render(null, container)
    },
  }
    

  //将template 放到body 
  // (1) createVNode()  将 组件变成一个vnode
  // （2）render() 将vnode变成真实的dom 放到元素
  //（3）放到指定的位置 body 下的儿子
  //对象
  //渲染组件
  // 组件
  //vue3  createVNode :将 组件变成一个vnode
  // console.log(MessageComponent);
  // console.log(createVNode(MessageComponent));
  let vm = createVNode(MessageComponent, ops);

  // 接收父组件的数据
  // vm.props!.onDestory = () => {
  //   console.log("组件销毁");
  //   render(null, container);
  //   console.log(container);
  // }
  // render(组件，位置)
  render(vm, container);

  console.log("当前组件", container)

  // 放到指定的位置 body 下的儿子
  document.body.appendChild(container.firstElementChild!)
  instance.push(vm);
}