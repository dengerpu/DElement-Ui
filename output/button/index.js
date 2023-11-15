import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
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

const _hoisted_1 = {
  key: 0,
  class: "d-icon-jiazai"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classes)
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" 如果没有传值就不显示span这个标签 "),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export { script as default };
