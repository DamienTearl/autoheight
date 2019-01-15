<template>
  <el-col>
    <!-- <el-row style="background-color: $asideBgc;color: $fontC;height: 20px;display: none" ref="hideBox"></el-row> -->
    <el-menu
      :default-active="navAutoHeight"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgba(0,0,0,0)"
      :unique-opened="true">
      <!-- <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgba(0,0,0,0)"
      text-color="#fff"
      active-text-color="#ff0"> -->
        <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>经纪业务</span>
        </template>
        <!-- <el-menu-item-group> -->
          <router-link to="/HomePage/TabModel1" tag="div">
            <el-menu-item index="1-1">总览</el-menu-item>
          </router-link>
          <router-link to="/HomePage/TabModel2" tag="div">
            <el-menu-item index="1-2">信用业务</el-menu-item>
          </router-link>
        <!-- </el-menu-item-group> -->
        <!-- <el-menu-item-group title="分组2"> -->
          <el-menu-item index="1-3">选项3</el-menu-item>
        <!-- </el-menu-item-group> -->
          <el-menu-item index="1-4">选项4</el-menu-item>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="2">
        <!-- <i class="el-icon-menu"></i>
        <span slot="title">导航二</span> -->
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<style  lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}
.hideBox {
  background-color: $asideBgc;
  color: $fontC;
  height: 20px;
  display: none
}

.el-menu {
  text-align: left;
}
.el-submenu__title,.el-menu-item {
  color: $fontC;
}
.el-submenu__title:hover,.el-menu-item:hover {
  background-color: $tabBgc!important;
}
.el-menu-item.is-active {
  color: $tabC;
  background-color: $tabBgc!important;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  computed: {
    ...mapState({
      navAutoHeight: 'navAutoHeight'
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
  }
}
</script>
