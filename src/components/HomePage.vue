<template>
  <div class='homepage'>

    <el-container>
      <el-header>
        <img
          src="../assets/logo.png"
          alt=""
        >
        <p>前端总结</p>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px">
          <el-menu
            :default-active="jumpInstruction"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
          >

            <el-menu-item index="/HelloWorld">
              <i class="el-icon-setting"></i>
              <span slot="title">Vuex</span>
            </el-menu-item>
            <el-menu-item index="/es6">
              <i class="el-icon-menu"></i>
              <span slot="title">ES6</span>
            </el-menu-item>
            <el-submenu index=''>
              <template slot="title">Vue</template>
              <el-menu-item index="/container">父子传值</el-menu-item>
              <!-- <el-menu-item index="/nextTick">选项2</el-menu-item> -->
            </el-submenu>
            <el-menu-item index="/GJJS">
              <i class="el-icon-menu"></i>
              <span slot="title">JS</span>
            </el-menu-item>
            <el-menu-item index="/echarts">
              <i class="el-icon-menu"></i>
              <span slot="title">echarts</span>
            </el-menu-item>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    jumpInstruction() {
      //初始化时,导航显示首页
      if (this.$route.path == '/') {
        this.$router.push('/index')
        return '/index'
      } else {
        //非导航跳转页面时,导航栏选中相应选项
        return this.$route.path
      }
    }
  }

}
</script>
<style lang="less" scoped>
.homepage {
  height: 100%;
  .el-container {
    background-color: #eee !important;
  }
  .el-aside {
    background-color: #fff !important;
  }
  .el-header {
    background-color: #1a5692;
    line-height: 60px;
    color: #fff;
    text-align: justify;
    font-size: 20px;
    img {
      width: 30px;
      height: 30px;
      padding-top: 14px;
      float: left;
      margin-right: 20px;
    }
    p {
      float: left;
    }
  }
  /deep/ .el-submenu__title {
    padding-left: 0 50px !important;
  }
}
</style>