<template>
  <div class='classPage'>
    <div class='table '>
      <div class='classtableone'>
        <div
          class='top '
          v-for='(item,index) in tableList'
          :key='index'
          :class='{active:index==num}'
          @click='topBtn(index)'
          ref='top1'
        >
          <span> {{item.tableName}}{{index+1}}</span>
          <i
            class='el-icon-circle-close'
            @click.stop='close(index)'
          ></i>
        </div>

        <i
          class='el-icon-circle-plus-outline'
          @click.stop='addTable'
        ></i>
      </div>
      <div
        class='bottom clearfix'
        v-for='(item,index) in tablebottomList'
        :key="index + '-only'"
        v-show="index==num"
      >

        <span> {{item.tableContent}}{{index+1}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableList: [
        { id: 0, tableName: '测试' },
        { id: 1, tableName: '测试' },
      ],
      tablebottomList: [
        { id: 0, tableContent: '测试内容' },
        { id: 1, tableContent: '测试内容' },
      ],
      num: 0,
      addNum: 2
    }
  },
  mounted() {
    this.$nextTick(() => {

    })
  },
  methods: {
    topBtn(index) {
      console.log(index)
      this.num = index

    },
    close(index) {
      console.log(index)


      this.tableList.splice(index, 1)
      this.$nextTick(() => {

        this.num = index
        console.log(this.num)
        console.log(index)
      })

    },
    addTable() {
      var _that = this
      class add {
        constructor() {
        }
        addTab(i) {
          console.log(i)
          _that.addNum = _that.addNum + 1
          _that.tableList.push({ id: _that.addNum, tableName: '测试' })
          //   _that.tableList.push({ id: _that.addNum, tableName: '测试' + _that.addNum })
          _that.tablebottomList.push({ id: _that.addNum, tableContent: '测试内容'  })
          _that.$nextTick(() => {
            _that.num = _that.addNum - 1
            if (_that.num > 10) {
              console.log(1111)
            } else {
              console.log(2222)
            }
          })

        }
      }
      let a = new add()
      a.addTab(_that.addNum)
    }
  }
}
</script>
<style lang="less">
.classPage {
  padding: 50px 100px;
}
.table {
  height: 450px;
  width: 100%;
  border: 1px solid #000;
  text-align: justify;

  background: #fff;

  .top {
    border: 1px solid #000;
    height: 60px;
    cursor: pointer;
    width: 70px;
    float: left;
    text-align: center;
    line-height: 60px;
    position: relative;
    background: #fff;
    span {
    }
  }
  .bottom {
    padding: 10px;
  }
}
.classtableone {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #000;
}
.active {
  border-bottom: none !important;
}
.el-icon-circle-plus-outline {
  float: right;
  line-height: 60px;
  padding-right: 30px;
  cursor: pointer;
}
.el-icon-circle-close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  z-index: 111;
}
</style>