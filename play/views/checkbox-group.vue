<template>
  <div>
    <h1>CheckBoxGroup组件</h1>
    <div>
      {{ checkedCities }}
      <d-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      >Check all</d-checkbox
    >
    <d-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <d-checkbox v-for="city in cities" :key="city" :label="city"></d-checkbox>
    </d-checkbox-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "checkbox-group",
  setup() {
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const checkedCities = ref(['北京', '上海'])
    const cities = ['北京', '上海', '广州', '深圳']

    const handleCheckAllChange = (val: boolean) => {
      // console.log(val)
      checkedCities.value = val ? cities : []
      checkAll.value = val
      isIndeterminate.value = false
    }
    const handleCheckedCitiesChange = (value: string[]) => {
      const checkedCount = value.length
      checkAll.value = checkedCount === cities.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    }
    return {
      checkAll,
      isIndeterminate,
      checkedCities,
      cities,
      handleCheckAllChange,
      handleCheckedCitiesChange
    }
  },
})
</script>
