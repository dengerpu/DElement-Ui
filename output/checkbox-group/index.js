import { defineComponent, computed, provide, openBlock, createElementBlock, renderSlot } from 'vue';

var script = defineComponent({
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

const _hoisted_1 = { class: "d-checkbox-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/checkbox/src/checkboxGroup.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
