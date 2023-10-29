<template>
  <i :class="`d-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name:'DIcon',
  props: {
    name: {
      title: String,
      default: ''
    }
  }
})
</script>