<template>
  <div class="d-transfer">
    <d-transfer-panel :data="sourceData" :props="props" @checkChange="sourceCheckChange">左侧</d-transfer-panel>
    <div class="d-transfer__buttons">
      <d-button icon="d-icon-jiantou_shangyiye" :disabled="rightState.length === 0" @click="leftClick">去左</d-button>&nbsp;
      <d-button icon="d-icon-jiantou_xiayiye" :disabled="leftState.length === 0" @click="rightClick">去右</d-button>
    </div>
    <d-transfer-panel :data="targetData" :props="props" @checkChange="targteCheckChange">右侧</d-transfer-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue"
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
  setup(props, {emit}) {
    // 获取左右列表选中的数据
    let checkState = reactive({
      leftState: [],
      rightState: []
    })
    const sourceCheckChange = (leftValue) => {
      console.log("left", leftValue);
      checkState.leftState = leftValue;
    }
    const targteCheckChange = (rightValue) => {
      console.log("right", rightValue);
      checkState.rightState = rightValue;
    }
    // 穿梭点击事件
    const leftClick = () => { // 右边的数据给左边
      // 获取到右边的数据
      let currentValue = props.modelValue.slice(0);

      // 选中的值在右边删除
      checkState.rightState.forEach(item => {
        let index = currentValue.indexOf(item); // 找不到就是-1
        if(index > -1) {
          currentValue.splice(index, 1);
        }
        // 通知父亲
        emit("update:modelValue", currentValue)
      })
    }
    // 左边的数据到右边
    const rightClick = () => { // 左边的数据给右边
      // 目前右边有的数据
      let currentValue = props.modelValue.slice(0);
      // 合并
      currentValue = currentValue.concat(checkState.leftState);
      emit("update:modelValue", currentValue);
    }
    let {propkey,sourceData,targetData} = useComponentData(props)
    return{
      sourceCheckChange,
      targteCheckChange,
      leftClick,
      rightClick,
      propkey,
      sourceData,
      targetData,
      ...toRefs(checkState)
    }
  },
})
</script>
