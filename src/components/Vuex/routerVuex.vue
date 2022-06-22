<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    {{list}}
    <p>------------</p>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {

    ...mapState(['list']),
    // ...mapMutations(['axiosAdd']),
  },
  created() {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("stateInfo", JSON.stringify(this.$store.state));
    });
    if (localStorage.getItem("stateInfo")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("stateInfo"))
        )
      );
    }

    localStorage.removeItem("stateInfo");
    console.log("名字", this.$store.state);
  },
  watch: {}
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