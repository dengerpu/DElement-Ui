import { defineComponent, ref, onMounted, computed, onUnmounted, openBlock, createElementBlock, Fragment, createCommentVNode, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, vShow, render as render$1 } from 'vue';

var script = defineComponent({
    props: {
        //重新一次属性
        id: { type: String, default: '' },
        message: { type: String, default: "" },
        type: { type: String, default: 'success' },
        duration: {
            type: Number, default: 2000
        },
        center: { type: Boolean, defalut: true },
        offset: { type: Number, default: 20 },
        onclose: {
            type: Function,
            required: false,
        }
    },
    setup(props) {
        let show = ref(false);
        let timer;
        onMounted(() => {
            show.value = true;
            time();
        });
        // 处理样式
        const classs = computed(() => [
            'd-message--' + props.type,
            props.center ? "is-center" : ""
        ]);
        // 定时器
        function time() {
            timer = setTimeout(() => {
                show.value = false;
            }, props.duration);
        }
        // 组件销毁时清除定时器
        onUnmounted(() => {
            clearTimeout(timer);
        });
        // 计算偏移量, style: {top: 20px}
        // 包裹一层小括号是确保 JavaScript 解析器将花括号 {} 视为对象字面量，而不是代码块
        let styles = computed(() => ({
            top: `${props.offset}px`
        }));
        return {
            show,
            classs,
            styles
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 添加动画的效果 \r\n css    @before-leave=\"onClose\"\r\n js  transition name=\"fade\" mode=\"out-in\" appear>\r\n"),
    createVNode(Transition, {
      name: "d-message-fade",
      onBeforeLeave: _ctx.onclose,
      onAfterLeave: _cache[0] || (_cache[0] = $event => (_ctx.$emit('destroy'))),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["d-message", _ctx.classs]),
          style: normalizeStyle(_ctx.styles)
        }, " message ", 6 /* CLASS, STYLE */), [
          [vShow, _ctx.show]
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onBeforeLeave"])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/message/src/messageComponent.vue";

let instance = []; // 保存实例
function Message(options) {
    // 添加一个offset
    let offset = options.offset || 20;
    instance.forEach(item => {
        console.log("组件实例", item);
        offset += 60;
    });
    // 处理 清除元素
    let userClose = options.onclose;
    const container = document.createElement("div");
    let ops = {
        ...options,
        offset,
        // 添加事件
        onclose: () => {
            console.log("关闭事件前执行的操作");
            userClose?.();
        },
        onDestroy: () => {
            render$1(null, container);
        },
    };
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
    let vm = createVNode(script, ops);
    // 接收父组件的数据
    // vm.props!.onDestory = () => {
    //   console.log("组件销毁");
    //   render(null, container);
    //   console.log(container);
    // }
    // render(组件，位置)
    render$1(vm, container);
    console.log("当前组件", container);
    // 放到指定的位置 body 下的儿子
    document.body.appendChild(container.firstElementChild);
    instance.push(vm);
}

Message.install = (app) => {
    // vue3中全局应用 
    app.config.globalProperties.$message = Message;
};

export { Message as default };
