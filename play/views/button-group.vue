<template>
  <div>
    <h1 class="title">ButtonGroup</h1>
    <div style="display: flex;">
      <d-button-group>
        <d-button type="primary" icon="d-icon-jiantou_shangyiye">上一页</d-button>
        <d-button type="primary" >下一页<i class="d-icon-jiantou_xiayiye"></i></d-button>
      </d-button-group>
      <d-button-group style="margin-left: 10px;">
        <d-button type="primary" icon="d-icon-jiantou_shangyiye" />
        <d-button type="primary" icon="d-icon-chakan" />
        <d-button type="primary" icon="d-icon-jiantou_xiayiye" />
      </d-button-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ButtonGroup',
  setup() {
    
  },
})
</script>
