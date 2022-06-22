<template>
  <div class='export1'>
    <p class='title'>1、export 和 export default 都可用于导出常量、函数、文件、模块等</p>
    <p class='title'>2、可以在其它文件或模块中通过 import 将其导入，以便能够对其进行使用</p>
    <p class='title'>3、在一个文件或模块中，export、import可以有多个，export default仅有一个</p>
    <p class='title'>4、通过export方式导出，在导入时要加{ }，且不能自定义名字，export default不用加{ }，且可以自定义名字</p>
    <el-button @click='exportBtn'>示例</el-button>
    <p> 我是 export default传来的值：{{exportdefaultStr}}</p>
    <p> 我是 export 传来的值：{{str}}+{{str1}}</p>
    <p> 我是 export 传来的 function值：{{Fun}}</p>
  </div>
</template>
<script>
import exportdefaultStr from './export'
import { str, str1, Fun } from './export'
export default {
  data() {
    return {
      exportdefaultStr: {

      },
      str: '',
      str1: '',
      Fun: ''
    }
  },
  methods: {
    exportBtn() {
      console.log(exportdefaultStr)
      this.exportdefaultStr = exportdefaultStr
      console.log(str)
      console.log(str1)
      this.str = str
      this.str1 = str1
      this.Fun = Fun()
    }
  }
}
</script>
<style lang="less">
.export1 {
  padding: 20px;
}
</style>