<template>
  <div>
    <h1 class="title">Message</h1>
    <div style="display: flex;">
      <d-button :plain="true" @click="open">Show message</d-button>
      <d-button @click="ClickChange"> 点击出现message </d-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Message from "@d-ui/message"
export default defineComponent({
  name: 'Message',
  setup() {
    const open = () => {
      Message('this is a message.')
    }
    const ClickChange =()=>{
      Message({
        message:`<span>你好同学</span>`,
        type:"success",
        center:true
      })
    }

    return {
      open,
      ClickChange
    }
  },
})
</script>
