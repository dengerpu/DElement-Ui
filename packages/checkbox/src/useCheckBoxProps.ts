import { ICheckBoxProps, IGroupProvide } from "./checkbox.type"
import { computed, getCurrentInstance, inject } from "vue"

// 处理modelValue
function useModel(props: ICheckBoxProps) {
  // emit 可以通过ctx上下文来获取的，也就是setup(props,ctx)
  // 这里为了方便使用getCurrentInstance方法来获取当前用户的实例
  let { emit } = getCurrentInstance()

  // 获取父组件传过来的数据
  let useProvide = inject<IGroupProvide>("DCheckBoxGroup", {})

  // 通过计算属性来处理
  const model = computed({
    get() { // 获取值
      // return props.modelValue
      return useProvide.modelValue?useProvide.modelValue.value:props.modelValue;
    },
    set(val) { // 值改变通过自定义事件通知父组件
      if(useProvide.modelValue) {
        return useProvide.handChange(val);
      }

      emit("update:modelValue", val)
    }
  })
  return model
}
// 是否是选中状态
function usecheckbox(props: ICheckBoxProps, model) {
  const isChecked = computed(() => {
    const value = model.value
    return value
  })
  return isChecked;
}

function useEvent() {
  let { emit } = getCurrentInstance();
  function handChange(e) {
    const target = e.target
    const value = target.isChecked ? true : false
    emit("change", value)
  }
  return handChange
}

export const useCheckBoxProps = (props: ICheckBoxProps) => {
  let model = useModel(props);
  // 是否选中状态
  let isChecked = usecheckbox(props,model)
  // 触发事件
  let handChange = useEvent()
  return {
    model,
    isChecked,
    handChange
  }
}