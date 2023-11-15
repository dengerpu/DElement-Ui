import { getCurrentInstance, computed, watch, defineComponent, reactive, toRefs, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode, Fragment, renderList, createBlock } from 'vue';
import DCheckbox from '@d-ui/checkbox';
import DCheckboxGroup from '@d-ui/checkbox-group';
import DButton from '@d-ui/button';

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

var script$1 = defineComponent({
    name: "DtransferPanel",
    components: {
        DCheckbox,
        DCheckboxGroup
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "packages/transfer/src/transfer-panel.vue";

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

var script = defineComponent({
    name: "DTransfer",
    components: {
        DTransferPanel: script$1,
        DButton
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "packages/transfer/src/transfer.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
