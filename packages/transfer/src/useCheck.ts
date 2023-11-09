import { computed, getCurrentInstance, watch } from "vue"
export const useCheck = (props, State) => {
  let { emit } = getCurrentInstance()
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

  // 实现反选功能（下面的按钮取消勾选之后，全选按钮取消）
  watch(() => State.checked, () => {
    // 获取所有的key
    let checkeys = checkDisAble.value.map(item => item[keyProps.value]);
    State.allCheck = checkeys.length > 0 && checkeys.every(key => State.checked.includes(key));
    emit("checkChange", State.checked);
  })

  return{
    labelProps,
    keyProps,
    disabledPorps,
    handleChange
 }
}