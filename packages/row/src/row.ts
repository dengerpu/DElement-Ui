import {defineComponent, h, PropType, computed, provide} from "vue"
type justifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export default defineComponent({
  name: "DRow",
  props: {
    tag: { // 自定义元素标签
      type: String,
      default: 'div'
    },
    gutter: { // 栅格间隔
      type: Number,
      default: 0
    },
    justify: { // 	flex 布局下的水平排列方式
      type: String as PropType<justifyType>,
      vaildator: (val : string)=> {
        return ['start','end', 'center','space-around', 'space-between', 'space-evenly'].includes(val)
      },
      default: "start" 
    },
    align: {
      type: String,
      default: ""
    }
  },
  setup(props, {slots}) {
    //父组件中提供数据 provide  子组件中使用
    provide('DRow',props.gutter)
    const classs = computed(() => [
        'd-row',
        props.justify !== 'start' ? `is-justify-${props.justify}` : ""
    ])
    //解决gutter 给开头和结尾元素和容器对齐
    const styles = computed(() => {
      let res = {
        marginLeft: '',
        marginRight: ''
      }
      if(props.gutter) {
        res.marginLeft = res.marginRight =  `-${props.gutter/2}px`;
      }
      return res
    })

    return () => h(props.tag, {
      class: classs.value,
      style: styles.value
    }, slots.default?.()) // 相当于slots.default && slots.default()
  }
})