<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="username"
        label="用户名"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
      >
      </el-table-column>
      <el-table-column
        prop="departmentName"
        label="部门名称"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Sun1
      ref='details'
      @getorderList="getPendingOrderList"
      :inputName='newweekTime'
    ></Sun1>
  </div>
</template>
<script>
import Sun1 from './nextTick'
import { axiosPost } from '@/api/request'
export default {
  components: {
    Sun1
  },
  data() {
    return {
      tableData: [],
      newweekTime: {}
    }
  },
  mounted() {
    this.getaxiosPost()
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$refs.details.toggle()
      this.newweekTime = row
    },
    getPendingOrderList(obj) {
      console.log(obj)
      this.tableData.push(obj.flg)
    },
    getaxiosPost() {
      let data = {
        pageNum: 1,
        pageSize: 1000
      }
      axiosPost(data).then((response) => {
        console.log(response.resultValue.list)
        this.tableData = response.resultValue.list
      })
    }
  }
}
</script>
<style  lang="less" scoped>
</style>