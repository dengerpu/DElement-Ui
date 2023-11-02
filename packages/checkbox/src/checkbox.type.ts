export interface ICheckBoxProps {
  name?: string, // input中name属性
  label?: string | boolean | number, // v-model为array时使用
  modelValue: string | boolean | number, // 绑定的值
  indeterminate?: boolean // 是否半选
  disabled?: boolean // 禁用
  checked?: boolean // 是否选中
}