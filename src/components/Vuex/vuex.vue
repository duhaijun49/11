<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    {{list}}
    <!-- <ul>
      <li
        v-for='item in $store.state.list'
        :key='item.id'
      >{{item}}</li>
    </ul> -->
    <el-input
      v-model="inputvalue"
      placeholder="请输入内容"
    ></el-input>
    <p>
      <el-button @click='addAxion'>添加按钮</el-button>
      <el-button @click='btnList("0")'>添加按钮1</el-button>
      <el-button @click='btnList("1")'>添加按钮2</el-button>
      <el-button @click='btnList("2")'>添加按钮3</el-button>
      <el-button @click='routerBtn'>跳转页面</el-button> -->
      <el-button @click='routerBtn'>跳转页面</el-button>
    </p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {

    ...mapState(['list']),
    inputvalue: {
      get() {
        return this.$store.state.inputvalue;
      },
      set(v) {
        this.$store.commit("setInputValue", v)
      }
    }
  },
  mounted() {
    this.$store.dispatch("pro")
  },
  methods: {
    routerBtn() {
      this.$router.push("/routerVuex")
    },
    btnList(key) {
      console.log(key)
      this.$store.commit("btn", key)
    },
    addAxion() {
      this.$store.commit("axiosAdd")
    },
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-breadcrumb {
  font-size: 18px !important;
  margin-bottom: 30px;
  .el-breadcrumb__inner {
    cursor: pointer !important;
  }
}
</style>