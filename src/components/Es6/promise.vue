<template>
  <div class='promise1'>
    <p class='title'>
      1.promise是处理异步的一种解决方案，适用于调用接口，确保获取完数据后，通过获取的数据在操作下一波逻辑。<br>
      2.触发promise后，会执行2个结果，一个是成功(resolve),一个是失败(reject)
    </p>
    <el-button @click='axiosBtn'>示例</el-button>
    <p>
      {{this.data}}
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      token: '5e05b15034a3453cb599829aa6cb7ef5',
      data: null
    }
  },
  methods: {
    axiosBtn() {
      this.$message('5秒后开始调用');
      var promise = new Promise((resolve, reject) => {

        setTimeout(() => {
          let data = axios.get('http://221.226.67.42:10809/home/getReportNum', {
            headers: {
              token: this.token
            }
          })
          // data 是传递给then方法的参数
          resolve(data)
          this.$message.success('调用成功');
        }, 5000);
      })
      console.log(promise)
      promise.then((value) => {
        console.log(value)
        this.data = value.data
      })
    },
  }
}
</script>
<style lang="less">
.promise1 {
  padding: 20px;
}
</style>