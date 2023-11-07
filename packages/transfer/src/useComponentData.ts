import { computed } from "vue"
export const useComponentData = (props) => {
  // console.log(props.data) 
  // 左边的数据
  // 1.获取到key
  let propkey = computed(() => props.props.key)
  // 2.把数组变成对象 []=>{}  {}=[]
  const data = computed(() => { // [{key:1},{key:2}]
    return props.data.reduce((memo, cur) => {
      console.log("memo", memo)
      memo[cur[propkey.value]] = cur;
    }, {})
  })
  console.log(data)
  // 3.将数据分 左右
  const sourceData = computed(() => {
    return props.data.filter(item => !props.modelValue.includes(item[propkey.value]))
  })
  // console.log("sourceData", sourceData.value)

  // 右边的数据
  const targetData = computed(() => {
    return props.data.filter(item => props.modelValue.includes(item[propkey.value]))
  })

  // console.log("targetData", targetData.value)

  return {
    propkey,
    sourceData,
    targetData
  }

}