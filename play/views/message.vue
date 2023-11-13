<template>
  <div>
    <h1 class="title">Message</h1>
    <div style="display: flex;">
      <d-button :plain="true" @click="open">Show message</d-button>
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

    return {
      open
    }
  },
})
</script>
