<template>
  <div>
    <div>
      <d-button>Default</d-button>
      <d-button type="primary" loading>Primary</d-button>
      <d-button type="success">Success</d-button>
      <d-button type="info">Info</d-button>
      <d-button type="warning" disabled>Warning</d-button>
      <d-button type="danger" round>Danger</d-button>
    </div>
    <div style="margin: 10px 0;">
      <d-button plain>Plain</d-button>
      <d-button type="primary" plain>Primary</d-button>
      <d-button type="primary" icon="d-icon-tabqiehuan" circle></d-button>
      <d-button type="success" icon="d-icon-chakan">按钮</d-button>
      <d-button type="warning" :loading="buttonLoading">加载</d-button>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
function useButton() {
  let buttonLoading = ref(true)
  onMounted(()=>{
      setTimeout(() => {
          buttonLoading.value = false;
      }, 2000);
  });
  return {
    buttonLoading
  }
}

export default defineComponent({
  setup() {
    return {
      ...useButton()
    }
  },
})

</script>