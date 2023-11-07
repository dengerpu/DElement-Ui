import { computed } from "vue"
export const useCheck = (props, State) => {
  // 变成响应式
  const labelProps = computed(() => props.props.label)
  const keyProps = computed(() => props.props.key)
  const disabledPorps = computed(() => props.props.disabled)
  
  // 处理全选和反选
  const checkDisAble = computed(() => {
    return props.data.filter(item => !item[disabledPorps.value])
  })
  
  const handleChange = (val) => {
    State.allCheck  = val
    State.checked = val?checkDisAble.value.map(item=>{
      return item[keyProps.value]
    }):[]
  }

  return{
    labelProps,
    keyProps,
    disabledPorps,
    handleChange
 }
}