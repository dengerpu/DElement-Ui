<template>
  <div class="d-checkbox-group">
        <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from "vue"

export default defineComponent({
  name: "DCheckboxGroup",
  props: {
    modelValue: Array // 给子组件提供数据
  }, 
  emits: ["update:modelValue","change"],
  setup(props, { emit }) {
    let modelValue = computed(() => props.modelValue);
    const handChange = (val) => {
      emit("update:modelValue", val);
      emit("change", val);
    }
    // 给子组件提供数据
    provide("DCheckBoxGroup", {
      modelValue,
      handChange,
      name: "DCheckBoxGroup"
    })
  },
})
</script>
