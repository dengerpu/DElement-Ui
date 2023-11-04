<template>
  <div>
    <h1>CheckBox组件</h1>
    {{ checkboxValue }}
    <d-checkbox v-model="checkboxValue" @change="handleChange">1111</d-checkbox>
    <d-checkbox v-model="checkboxValue1" :disabled="disabled">2222</d-checkbox>
    <d-checkbox v-model="checkboxValue2" indeterminate>3333</d-checkbox>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "checkbox",
  setup() {
    const checkboxValue = ref(true)
    const checkboxValue1 = ref(false)
    const checkboxValue2 = ref(true)
    const disabled = ref(true)
    function handleChange(val) {
      console.log("复选框发生了变化", val)
    }
    return {
      checkboxValue,
      checkboxValue1,
      checkboxValue2,
      disabled,
      handleChange
    }
  },
})
</script>
