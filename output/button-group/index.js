import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';

var script = defineComponent({
    name: 'DButtonGroup'
});

const _hoisted_1 = { class: "d-button-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/button/src/button-group.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
