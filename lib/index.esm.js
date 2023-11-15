import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, provide, h, inject, getCurrentInstance, createElementVNode, withDirectives, vModelCheckbox, Fragment, createTextVNode, toDisplayString, watch, reactive, toRefs, resolveComponent, createVNode, withCtx, renderList, createBlock, ref, onMounted, onUnmounted, Transition, normalizeStyle, vShow, render as render$8 } from 'vue';

var script$7 = defineComponent({
    name: "DButton",
    props: {
        type: {
            type: String,
            vaildator: (val) => {
                return ["primary", "success", "danger", 'info', "text", "warning"].includes(val);
            },
            default: "primary"
        },
        icon: {
            type: String,
            default: ''
        },
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
    },
    setup(props, ctx) {
        const classes = computed(() => [
            "d-button",
            //修饰动态的样式
            "d-button--" + props.type,
            {
                "is-plain": props.plain,
                "is-round": props.round,
                "is-circle": props.circle,
                "is-loading": props.loading,
                "is-disabled": props.disabled
            }
        ]);
        return {
            classes
        };
    },
});

const _hoisted_1$5 = {
  key: 0,
  class: "d-icon-jiazai"
};
const _hoisted_2$3 = { key: 2 };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classes)
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1$5))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" 如果没有传值就不显示span这个标签 "),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$7.render = render$7;
script$7.__file = "packages/button/src/button.vue";

script$7.install = (app) => {
    app.component(script$7.name, script$7);
};

var script$6 = defineComponent({
    name: 'DButtonGroup'
});

const _hoisted_1$4 = { class: "d-button-group" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$6.render = render$6;
script$6.__file = "packages/button/src/button-group.vue";

script$6.install = (app) => {
    app.component(script$6.name, script$6);
};

var script$5 = defineComponent({
    name: 'DIcon',
    props: {
        name: {
            title: String,
            default: ''
        }
    }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`d-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "packages/icon/src/icon.vue";

script$5.install = (app) => {
    app.component(script$5.name, script$5);
};

var DRow = defineComponent({
    name: "DRow",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            vaildator: (val) => {
                return ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(val);
            },
            default: "start"
        },
        align: {
            type: String,
            default: ""
        }
    },
    setup(props, { slots }) {
        //父组件中提供数据 provide  子组件中使用
        provide('DRow', props.gutter);
        const classs = computed(() => [
            'd-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : ""
        ]);
        //解决gutter 给开头和结尾元素和容器对齐
        const styles = computed(() => {
            let res = {
                marginLeft: '',
                marginRight: ''
            };
            if (props.gutter) {
                res.marginLeft = res.marginRight = `-${props.gutter / 2}px`;
            }
            return res;
        });
        return () => h(props.tag, {
            class: classs.value,
            style: styles.value
        }, slots.default?.()); // 相当于slots.default && slots.default()
    }
});

DRow.install = (app) => {
    app.component(DRow.name, DRow);
};

var DCol = defineComponent({
    name: "DCol",
    //用户属性  tag
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup(props, ctx) {
        //我们已经定好属性  通过计算属性  d-col-span - 5   d-col-offset - 5 
        const gutter = inject('DRow', 0);
        console.log('gutter值', gutter);
        const classs = computed(() => {
            let ret = [];
            const pops = ["span", "offset"];
            pops.forEach((item) => {
                const num = props[item];
                if (typeof num == "number" && num > 0) {
                    ret.push(`d-col-${item}-${num}`);
                }
            });
            return [
                'd-col',
                ...ret
            ];
        });
        // gutter处理
        const styles = computed(() => {
            if (gutter != 0) {
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                };
            }
            else {
                return {};
            }
        });
        return () => h(props.tag, {
            class: classs.value,
            style: styles.value
        }, ctx.slots.default?.());
    }
});

DCol.install = (app) => {
    app.component(DCol.name, DCol);
};

// 处理modelValue
function useModel(props) {
    // emit 可以通过ctx上下文来获取的，也就是setup(props,ctx)
    // 这里为了方便使用getCurrentInstance方法来获取当前用户的实例
    let { emit } = getCurrentInstance();
    // 获取父组件传过来的数据
    let useProvide = inject("DCheckBoxGroup", {});
    // 通过计算属性来处理
    const model = computed({
        get() {
            // return props.modelValue
            return useProvide.modelValue ? useProvide.modelValue.value : props.modelValue;
        },
        set(val) {
            if (useProvide.modelValue) {
                return useProvide.handChange(val);
            }
            emit("update:modelValue", val);
        }
    });
    return model;
}
// 是否是选中状态
function usecheckbox(props, model) {
    const isChecked = computed(() => {
        const value = model.value;
        if (Array.isArray(value)) {
            return value.includes(props.label);
        }
        else { // checkbox单个使用
            return value;
        }
    });
    return isChecked;
}
function useEvent() {
    let { emit } = getCurrentInstance();
    function handChange(e) {
        const target = e.target;
        const value = target.checked ? true : false;
        e.stopPropagation();
        emit("change", value);
    }
    return handChange;
}
const useCheckBoxProps = (props) => {
    let model = useModel(props);
    // 是否选中状态
    let isChecked = usecheckbox(props, model);
    // 触发事件
    let handChange = useEvent();
    return {
        model,
        isChecked,
        handChange
    };
};

var script$4 = defineComponent({
    name: "DCheckbox",
    props: {
        indeterminate: Boolean,
        checked: Boolean,
        name: String,
        disabled: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean] //双向数据绑定
    },
    emits: ["update:modelValue", "change"],
    setup(props) {
        return {
            ...useCheckBoxProps(props)
        };
    },
});

const _hoisted_1$3 = { class: "d-checkbox" };
const _hoisted_2$2 = { class: "d-checkbox__input" };
const _hoisted_3$1 = ["disabled", "indeterminate", "name", "checked", "value"];
const _hoisted_4 = {
  key: 0,
  class: "el-checkbox__label"
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("span", _hoisted_2$2, [
      withDirectives(createElementVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        disabled: _ctx.disabled,
        indeterminate: _ctx.indeterminate,
        name: _ctx.name,
        checked: _ctx.isChecked,
        onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.handChange && _ctx.handChange(...args))),
        value: _ctx.label
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$1), [
        [vModelCheckbox, _ctx.model]
      ])
    ]),
    (_ctx.$slots.default || _ctx.label)
      ? (openBlock(), createElementBlock("span", _hoisted_4, [
          renderSlot(_ctx.$slots, "default"),
          (!_ctx.$slots.default)
            ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

script$4.render = render$4;
script$4.__file = "packages/checkbox/src/checkbox.vue";

script$4.install = (app) => {
    app.component(script$4.name, script$4);
};

var script$3 = defineComponent({
    name: "DCheckboxGroup",
    props: {
        modelValue: Array // 给子组件提供数据
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
        // let modelValue = computed(() => props.modelValue);
        let modelValue = computed(() => {
            return props.modelValue;
        });
        const handChange = (val) => {
            emit("update:modelValue", val);
            emit("change", val);
        };
        // 给子组件提供数据
        provide("DCheckBoxGroup", {
            modelValue,
            handChange,
            name: "DCheckBoxGroup"
        });
    },
});

const _hoisted_1$2 = { class: "d-checkbox-group" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$3.render = render$3;
script$3.__file = "packages/checkbox/src/checkboxGroup.vue";

script$3.install = (app) => {
    app.component(script$3.name, script$3);
};

const useCheck = (props, State) => {
    let { emit } = getCurrentInstance();
    // 变成响应式
    const labelProps = computed(() => props.props.label);
    const keyProps = computed(() => props.props.key);
    const disabledPorps = computed(() => props.props.disabled);
    // 处理全选和反选
    const checkDisAble = computed(() => {
        return props.data.filter(item => !item[disabledPorps.value]);
    });
    const handleChange = (val) => {
        State.allCheck = val;
        State.checked = val ? checkDisAble.value.map(item => {
            return item[keyProps.value];
        }) : [];
    };
    // 实现反选功能（下面的按钮取消勾选之后，全选按钮取消）
    watch(() => State.checked, () => {
        // 获取所有的key
        let checkeys = checkDisAble.value.map(item => item[keyProps.value]);
        State.allCheck = checkeys.length > 0 && checkeys.every(key => State.checked.includes(key));
        // 通知父组件，选中发生改变，为穿梭功能提供数据
        emit("checkChange", State.checked);
        // 实现穿梭，原理就是兄弟间组件传值 （这里采用借助父组件的形式）
    });
    // 解决穿梭之后全选还在的问题
    watch(() => props.data, () => {
        State.allCheck = false;
    });
    return {
        labelProps,
        keyProps,
        disabledPorps,
        handleChange
    };
};

var script$2 = defineComponent({
    name: "DtransferPanel",
    components: {
        DCheckbox: script$4,
        DCheckboxGroup: script$3
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        props: {
            type: Object
        }
    },
    emits: ["checkChange"],
    setup(props) {
        //注意 （1）处理数据
        const State = reactive({
            checked: [],
            allCheck: false //是否全选
        });
        let { labelProps, keyProps, disabledPorps, handleChange } = useCheck(props, State);
        return {
            ...toRefs(State),
            labelProps, keyProps, disabledPorps, handleChange
        };
    },
});

const _hoisted_1$1 = { class: "d-transfer-panel" };
const _hoisted_2$1 = { class: "d-transfer-panel__header" };
const _hoisted_3 = { class: "d-transfer-panel__body" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_d_checkbox = resolveComponent("d-checkbox");
  const _component_d_checkbox_group = resolveComponent("d-checkbox-group");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2$1, [
      createVNode(_component_d_checkbox, {
        modelValue: _ctx.allCheck,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.allCheck) = $event)),
        onChange: _ctx.handleChange
      }, {
        default: withCtx(() => [
          createTextVNode("全选/半选")
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue", "onChange"])
    ]),
    createElementVNode("div", _hoisted_3, [
      createVNode(_component_d_checkbox_group, {
        modelValue: _ctx.checked,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.checked) = $event))
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item) => {
            return (openBlock(), createBlock(_component_d_checkbox, {
              key: item[_ctx.keyProps],
              label: item[_ctx.keyProps],
              disabled: item[_ctx.disabledPorps]
            }, null, 8 /* PROPS */, ["label", "disabled"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])
    ])
  ]))
}

script$2.render = render$2;
script$2.__file = "packages/transfer/src/transfer-panel.vue";

const useComponentData = (props) => {
    // console.log(props.data) 
    // 左边的数据
    // 1.获取到key
    let propkey = computed(() => props.props.key);
    // 2.把数组变成对象 []=>{}  {}=[]
    computed(() => {
        return props.data.reduce((memo, cur) => {
            // console.log("memo", memo)
            memo[cur[propkey.value]] = cur;
        }, {});
    });
    // 3.将数据分 左右
    const sourceData = computed(() => {
        return props.data.filter(item => !props.modelValue.includes(item[propkey.value]));
    });
    // console.log("sourceData", sourceData.value)
    // 右边的数据
    const targetData = computed(() => {
        return props.data.filter(item => props.modelValue.includes(item[propkey.value]));
    });
    // console.log("targetData", targetData.value)
    return {
        propkey,
        sourceData,
        targetData
    };
};

var script$1 = defineComponent({
    name: "DTransfer",
    components: {
        DTransferPanel: script$2,
        DButton: script$7
    },
    props: {
        data: {
            type: Array
        },
        props: {
            type: Object
        },
        modelValue: {
            type: Array
        }
    },
    setup(props, { emit }) {
        // 获取左右列表选中的数据
        let checkState = reactive({
            leftState: [],
            rightState: []
        });
        const sourceCheckChange = (leftValue) => {
            console.log("left", leftValue);
            checkState.leftState = leftValue;
        };
        const targteCheckChange = (rightValue) => {
            console.log("right", rightValue);
            checkState.rightState = rightValue;
        };
        // 穿梭点击事件
        const leftClick = () => {
            // 获取到右边的数据
            let currentValue = props.modelValue.slice(0);
            // 选中的值在右边删除
            checkState.rightState.forEach(item => {
                let index = currentValue.indexOf(item); // 找不到就是-1
                if (index > -1) {
                    currentValue.splice(index, 1);
                }
                // 通知父亲
                emit("update:modelValue", currentValue);
            });
        };
        // 左边的数据到右边
        const rightClick = () => {
            // 目前右边有的数据
            let currentValue = props.modelValue.slice(0);
            // 合并
            currentValue = currentValue.concat(checkState.leftState);
            emit("update:modelValue", currentValue);
        };
        let { propkey, sourceData, targetData } = useComponentData(props);
        return {
            sourceCheckChange,
            targteCheckChange,
            leftClick,
            rightClick,
            propkey,
            sourceData,
            targetData,
            ...toRefs(checkState)
        };
    },
});

const _hoisted_1 = { class: "d-transfer" };
const _hoisted_2 = { class: "d-transfer__buttons" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_d_transfer_panel = resolveComponent("d-transfer-panel");
  const _component_d_button = resolveComponent("d-button");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_d_transfer_panel, {
      data: _ctx.sourceData,
      props: _ctx.props,
      onCheckChange: _ctx.sourceCheckChange
    }, {
      default: withCtx(() => [
        createTextVNode("左侧")
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["data", "props", "onCheckChange"]),
    createElementVNode("div", _hoisted_2, [
      createVNode(_component_d_button, {
        icon: "d-icon-jiantou_shangyiye",
        disabled: _ctx.rightState.length === 0,
        onClick: _ctx.leftClick
      }, {
        default: withCtx(() => [
          createTextVNode("去左")
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled", "onClick"]),
      createTextVNode("  "),
      createVNode(_component_d_button, {
        icon: "d-icon-jiantou_xiayiye",
        disabled: _ctx.leftState.length === 0,
        onClick: _ctx.rightClick
      }, {
        default: withCtx(() => [
          createTextVNode("去右")
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled", "onClick"])
    ]),
    createVNode(_component_d_transfer_panel, {
      data: _ctx.targetData,
      props: _ctx.props,
      onCheckChange: _ctx.targteCheckChange
    }, {
      default: withCtx(() => [
        createTextVNode("右侧")
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["data", "props", "onCheckChange"])
  ]))
}

script$1.render = render$1;
script$1.__file = "packages/transfer/src/transfer.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};

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
    let userClose = options.close;
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
            render$8(null, container);
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
    render$8(vm, container);
    console.log("当前组件", container);
    // 放到指定的位置 body 下的儿子
    document.body.appendChild(container.firstElementChild);
    instance.push(vm);
}

Message.install = (app) => {
    // vue3中全局应用 
    app.config.globalProperties.$message = Message;
};

const components = [
    script$7,
    script$5,
    script$6,
    DRow,
    DCol,
    script$4,
    script$3,
    script$1
];
const install = (app) => {
    // 全局注册
    components.forEach(component => {
        app.component(component.name, component);
    });
    // 注册全局应用
    app.config.globalProperties.$message = Message;
};
var index = {
    install, // 导出install方法
};

export { index as default };
