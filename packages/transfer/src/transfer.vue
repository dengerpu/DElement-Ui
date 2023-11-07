<template>
  <div class="d-transfer">
    <d-transfer-panel :data="sourceData" :props="props">左侧</d-transfer-panel>
    <div class="d-transfer__buttons">
      <d-button icon="d-icon-jiantou_shangyiye"></d-button>&nbsp;
      <d-button icon="d-icon-jiantou_xiayiye"></d-button>
    </div>
    <d-transfer-panel :data="targetData" :props="props">右侧</d-transfer-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import DTransferPanel from "./transfer-panel.vue"
import DButton from "@d-ui/button"
import { IDate } from './transfer.type';
import { useComponentData } from "./useComponentData"

export default defineComponent({
  name: "DTransfer",
  components: {
    DTransferPanel,
    DButton
  },
  props:{
    data:{
      type: Array as PropType<IDate[]>
    },
    props:{ //别名
      type:Object
    },
    modelValue:{
      type:Array
    }
  },
  setup(props) {
    let {propkey,sourceData,targetData} = useComponentData(props)
    return{
      propkey,sourceData,targetData
    }
  },
})
</script>
