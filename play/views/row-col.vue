<template>
  <div>
    <h1>Layout布局组件-Row-Col</h1>
    <div>
      span	栅格占据的列数
      <d-row tag="div">
        <d-col tag="span" :span="6">
          <div style="background:red;">11</div>
        </d-col>
        <d-col tag="span" :span="6">
          <div style="background:blue;">22</div>
        </d-col>
        <d-col tag="span" :span="6">
          <div style="background:pink;">33</div>
        </d-col>
        <d-col tag="span" :span="6">
          <div style="background: green;">44</div>
        </d-col>
      </d-row>
    </div>
    <div style="margin: 10px 0;" >
      offset	栅格左侧的间隔格数
      <d-row tag="div" >
        <d-col tag="span" :span="2">
          <div style="background:red;">11</div>
        </d-col>
        <d-col tag="span" :span="2" :offset="8">
          <div style="background:blue;">offset8</div>
        </d-col>
        <d-col tag="span" :span="2">
          <div style="background:pink;">33</div>
        </d-col>
        <d-col tag="span" :span="2" :offset="8">
          <div style="background: green;">offset8</div>
        </d-col>
      </d-row>
    </div>
    <div style="margin: 10px 0;" >
      justify	flex 布局下的水平排列方式
      <d-row tag="div" justify="space-between">
        <d-col tag="span" :span="2">
          <div style="background:red;">11</div>
        </d-col>
        <d-col tag="span" :span="2">
          <div style="background:blue;">22</div>
        </d-col>
        <d-col tag="span" :span="2">
          <div style="background:pink;">33</div>
        </d-col>
        <d-col tag="span" :span="2">
          <div style="background: green;">44</div>
        </d-col>
      </d-row>
    </div>
    <div style="margin: 10px 0;" >
      gutter	栅格间隔
      <d-row tag="div" :gutter="20">
        <d-col tag="span" :span="6">
          <div style="background:red;">11</div>
        </d-col>
        <d-col tag="span" :span="6">
          <div style="background:blue;">22</div>
        </d-col>
        <d-col tag="span" :span="6">
          <div style="background:pink;">33</div>
        </d-col>
        <d-col tag="span" :span="6">
          <div style="background: green;">44</div>
        </d-col>
      </d-row>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "RowCol",
  setup() {
  
  },
})

</script>