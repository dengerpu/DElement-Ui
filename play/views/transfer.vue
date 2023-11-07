<template>
  <div>
    <h1>Transfer</h1>
    <d-transfer v-model="rightValue" :data="transferDate" :props="transferProps"></d-transfer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "transfer",
  setup() {
    const generateData = () => { //数据源
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: 'label' + i,
          disabled: i % 4 === 0,
        })
      }
      return ref(data) //响应数据
    }
    return{
        transferDate:generateData(),
        rightValue: ref([1,4]),
        transferProps:{ //指定属性
          key: "key",
          label: "label",
          disabled:"disabled",
        }
    }
  },
})
</script>
