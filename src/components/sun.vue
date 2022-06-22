<template>

  <div>
    <el-table
      v-if='orderDialogVisible==true'
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >首页</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if='isflage==true'>
      {{this.inputName}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inputName: {
      type: Object,
      default: 'Popup'
    },
  },
  data() {
    return {
      isflage: false,
      orderDialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      name: this.inputName
    };
  },
  created() {
  },
  mounted() {

  },
  methods: {
    toggle() {
      this.orderDialogVisible = true

      this.name = this.inputName
      console.log(this.name)
      this.isflage = true
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>