<template>
  <div class="d-checkbox">
    <span class="d-checkbox__input">
      <input type="checkbox" 
      v-model="model"  
      :disabled="disabled"
      :indeterminate="indeterminate"
      :name="name"
      :checked="isChecked"
      @change="handChange"
      :value="label"
      >
    </span>

    
    <span v-if="$slots.default || label" class="el-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useCheckBoxProps } from "./useCheckBoxProps"
export default defineComponent({
  name: "DCheckbox",
  props: {
    indeterminate: Boolean, //半选
    checked: Boolean,
    name: String,
    disabled: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean] //双向数据绑定
  },
  emits:["update:modelValue", "change"],
  setup(props) {
    return {
      ...useCheckBoxProps(props)
    }
  },
})
</script>
