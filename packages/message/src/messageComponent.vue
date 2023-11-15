<template>
<!-- 添加动画的效果 
 css    @before-leave="onClose"
 js  transition name="fade" mode="out-in" appear>
-->
<transition name="d-message-fade" @before-leave="onclose" @after-leave="$emit('destroy')">
  <div class="d-message" :class="classs" :style="styles" v-show="show">
    message
  </div>
</transition>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue"

export default defineComponent({
  props: {
    //重新一次属性
    id:{type:String,default:''},
    message:{type:String,default:""},
    type:{type:String,default:'success' }, // PropType<>
    duration:{
      type:Number,default:2000
    },
    center:{type:Boolean,defalut:true},
    offset:{type:Number,default:20},
    onclose:{ 
      type: Function,
      required: false,
    }
  },
  setup(props) {
    let show = ref(false);
    let timer;
    onMounted(() => {
      show.value = true
      time()
    }) 
    // 处理样式
    const classs = computed(() => [
      'd-message--' + props.type,
      props.center?"is-center":""
    ])
    // 定时器
    function time() {
      timer = setTimeout(() => {
        show.value = false;
      }, props.duration)
    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
      clearTimeout(timer);
    })
    // 计算偏移量, style: {top: 20px}
    // 包裹一层小括号是确保 JavaScript 解析器将花括号 {} 视为对象字面量，而不是代码块
    let styles:any = computed(() => ({
      top:`${props.offset}px`
    }))
    return {
      show,
      classs,
      styles
    }
  },
})
</script>
