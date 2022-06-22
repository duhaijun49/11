<template>
  <div class='es6'>
    <el-button @click='btnEs6("0")'>var/const/let</el-button>
    <el-button @click='btnEs6("1")'>function/箭头函数</el-button>
    <el-button @click='btnEs6("2")'>新增数组方法</el-button>
    <el-button @click='btnEs6("7")'>构造函数</el-button>
    <el-button @click='btnEs6("3")'>Class类</el-button>
    <el-button @click='btnEs6("4")'> promise</el-button>
    <el-button @click='btnEs6("5")'>export 和export default </el-button>
    <el-button @click='btnEs6("6")'>async和await </el-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    btnEs6(item) {
      console.log(item)
      if (item == 0) {
        this.$router.push("/var1").catch(err => { err })
      } else if (item == 1) {
        this.$router.push("/function1").catch(err => { err })
      } else if (item == 2) {
        this.$router.push("/array1").catch(err => { err })
      } else if (item == 3) {
        this.$router.push("/class1").catch(err => { err })
      } else if (item == 4) {
        this.$router.push("/promise1").catch(err => { err })
      } else if (item == 5) {
        this.$router.push("/export1").catch(err => { err })
      } else if (item == 6) {
        this.$router.push("/async1").catch(err => { err })
      } else if (item == 7) {
        this.$router.push("/new1").catch(err => { err })
      }
    }
  }
}
</script>
<style lang="less">
.es6 {
  text-align: justify;
}
</style>