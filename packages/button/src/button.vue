<template>
  <button :class="classes">
    <i v-if="loading" class="d-icon-jiazai"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <!-- 如果没有传值就不显示span这个标签 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type buttonType = "primary"|"success"|"danger"|'info'|"text"|"warning"
export default defineComponent({
  name: "DButton",
  props: {
    type: {
      type: String as PropType<buttonType>,
      vaildator: (val: string) => {
        return [ "primary","success","danger",'info',"text","warning"].includes(val) 
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
      ])

      return {
        classes
      }
  },
});
</script>