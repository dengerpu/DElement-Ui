<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
  name: 'DButtonGroup'
})
</script>