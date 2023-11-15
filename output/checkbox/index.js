import { getCurrentInstance, inject, computed, defineComponent, openBlock, createElementBlock, createElementVNode, withDirectives, vModelCheckbox, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

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

var script = defineComponent({
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

const _hoisted_1 = { class: "d-checkbox" };
const _hoisted_2 = { class: "d-checkbox__input" };
const _hoisted_3 = ["disabled", "indeterminate", "name", "checked", "value"];
const _hoisted_4 = {
  key: 0,
  class: "el-checkbox__label"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("span", _hoisted_2, [
      withDirectives(createElementVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        disabled: _ctx.disabled,
        indeterminate: _ctx.indeterminate,
        name: _ctx.name,
        checked: _ctx.isChecked,
        onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.handChange && _ctx.handChange(...args))),
        value: _ctx.label
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
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

script.render = render;
script.__file = "packages/checkbox/src/checkbox.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
