<template>
  <div class="app_container">
    <div class="app_header"></div>
    <div class="app_center">
      <div class="app_menu">
        <ul>
          <li v-for="item in menu">
            <router-link active-class="active" :to="'/' + item">{{item}}</router-link>
          </li>
        </ul>
      </div>
      <div class="app_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const menu = reactive(["button","button-group", "row-col", "checkbox", "checkbox-group"])
</script>
<style lang="scss" scope>
.app_container {
  width: 100%;
  height: 100%;
  .app_header {
    width: 100%;
    height: 60px;
    background-color: cadetblue;
  }
  .app_center {
    display: flex;
    height: 100%;
    .app_menu {
      width: 200px;
      height: 100%;
      border-right: 1px solid #ccc;
      padding: 20px 0;
      ul {
        list-style: none;
        li {
          height: 30px;
          line-height: 30px;
          text-align: center;
          cursor: pointer;
          a {
            display: block;
          }
        }
        li:hover {
          color: blue;
          background-color: burlywood;
        }
      }
    }
    .app_content {
      width: 100%;
      padding: 20px;
    }
  }
 }
</style>