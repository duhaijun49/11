<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
      :show-close='false'
    >
      <p>{{inputName1.username}}</p>
      <p>{{inputName1.nickname}}</p>
      <p>{{inputName1.departmentName}}</p>
      <p>{{inputName1.phone}}</p>

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="SonBtn"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["inputName"],
  data() {
    return {
      dialogVisible: false,
      inputName1: this.inputName
    }
  },
  watch: {
    inputName(curVal, oldVal) {
      // this.inputName1()
      console.log(curVal)
      console.log(oldVal)
      if (curVal) {
        this.inputName1 = curVal
      }
    }
  },
  mounted() {

  },
  methods: {
    toggle() {
      this.dialogVisible = !this.dialogVisible
      if (this.dialogVisible == true) {
      }
    },
    SonBtn() {
      this.$emit("getorderList", { flg: this.inputName1 });
      this.dialogVisible = false
    }
  }
}
</script>
<style  lang="less" scoped>
</style>