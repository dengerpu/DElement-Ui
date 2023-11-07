<template>
  <div class="d-transfer-panel">
    <div class="d-transfer-panel__header">
      <d-checkbox v-model="allCheck"  @change="handleChange">全选/半选</d-checkbox>
    </div>
    <div class="d-transfer-panel__body">
      <d-checkbox-group v-model="checked">
        <d-checkbox v-for="item in data" :key="item[keyProps]" :label="item[keyProps]" :disabled="item[disabledPorps]"></d-checkbox>
      </d-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import DCheckbox from "@d-ui/checkbox"
import DCheckboxGroup from "@d-ui/checkbox-group"
import {useCheck} from './useCheck'

export default defineComponent({
  name: "DtransferPanel",
  components: {
    DCheckbox,
    DCheckboxGroup
  },
  props:{
    data:{
        type:Array,
        default:()=>[]
    },
    props:{
      type:Object
    }
  },
  setup(props) {
    //注意 （1）处理数据
    const State = reactive({
      checked:[],
      allCheck:false //是否全选
    })
    let  {labelProps,keyProps,disabledPorps,handleChange} = useCheck(props,State)
    return {
      ...toRefs(State),
      labelProps,keyProps,disabledPorps,handleChange
    }
  },
})
</script>
