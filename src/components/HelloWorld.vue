<template>
  <div class='helloWorld'>
    <div class='title'>
      <p class='title-1'>
        1.Vuex概念及使用
      </p>
      <p class='title-2'>
        1)适用于大型项目，多人开发。将公共的数据以及方法，存储到$store里，各组件在使用时，谁用谁拿。但是页面刷新时，存储的数据会丢失。
      </p>
      <p class='title-1'>
        2.安装依赖
      </p>
      <p class='title-2'>1)npm install vuex --save</p>
      <p class='title-2'>2)创建store文件，并且引用
        <el-image
          style="width: 80px; height: 50px"
          :src="url"
          :preview-src-list="srcList"
        >
        </el-image>
      </p>
      <p class='title-2'>3)Vuex 里面包括 state/mutations/actions等 </p>
      <p class='title-2'> 1、state 相当于 vue 里的data，在state 里面声明的变量，但是声明的变量不能被改变。 </p>
      <p class='title-2'> 2、mutations 相当于引用 state 里面声明的变量，是可以改变state声明的变量。 </p>
      <p class='title-2'> 3、actions 是用来处理异步的。当处理完异步得到结果后，组件中使用this.$store.dispatch(" "),store文件中actions方法内用形参调用commit方法，来调用改变声明的变量方法，从而复制到list
      </p>
      <p class='title-2'><span cstyle='color:red'>总结方法：</span>state里面声明。mutations修改state里面数据。actions处理接口，然后用context.commit('mutations方法名', res.data)，然后修改mutations里state数据，组件调用异步方法this.$store.dispatch("方法名")</p>
    </div>
    <el-button @click='examples'>示例</el-button>
    <!-- <my-container></my-container>
    <my-nextTick></my-nextTick> -->
    <!-- <ul>
      <li
        v-for='item in data1'
        :key='item.id'
      >{{item}}</li>
    </ul>
    <ul>
      <li
        v-for='item in data2'
        :key='item.id'
      >{{item}}</li>
    </ul> -->
    <!-- <ul>
      <li
        v-for='item in list'
        :key='item.id'
      >{{item}}</li>
    </ul>
    <el-input
      v-model="inputvalue"
      placeholder="请输入内容"
    ></el-input>
    <el-button @click='addAxion'>添加按钮</el-button>
    <el-button @click='btnList("0")'>添加按钮1</el-button>
    <el-button @click='btnList("1")'>添加按钮2</el-button>
    <el-button @click='btnList("2")'>添加按钮3</el-button>
    <el-button @click='routerBtn'>跳转页面</el-button> -->
    <!-- <ul>
      <li
        v-for='item in List'
        :key='item.id'
        @click='listBtn(item)'
        :class='{active:num===item.id}'
      >
        {{item}}
      </li>
    </ul> -->
  </div>
</template>

<script>

import axios from 'axios'
// import text from './text.js'


import { mapState } from 'vuex'

import url from '../assets/img/微信截图_20220413102032.png'
import srcList from '../assets/img/微信截图_20220413102032.png'
export default {
  // components: {
  //   'my-container': container,
  //   'my-nextTick': nextTick,
  // },
  computed: {
    // ...mapState(['list']),
    // inputvalue: {
    //   get() {
    //     return this.$store.state.inputvalue;
    //   },
    //   set(v) {
    //     this.$store.commit("setInputValue", v)
    //   }
    // }
  },
  data() {

    return {
      url: url,
      srcList: [srcList],
      baseUrl: "http://172.21.20.48:8084",
      listQuery: {
        pageNum: 1,
        pageSize: 10,
        json: [],
      },
      token: '5e05b15034a3453cb599829aa6cb7ef5',
      data1: [],
      data2: [],
      input: '',
      List: [
        { id: 0 }, { id: 1 }, { id: 2 }
      ],
      num: 0
    }
  },
  created() {
    // this.$store.dispatch("pro")
  },
  mounted() {
    // this.pro1()
    // console.log(publick1)
    // console.log(token1())
    // console.log(str)
    // console.log(text)

    // this.Fn()
  },
  methods: {
    examples() {
      this.$router.push("/Vuex")
    },
    listBtn(item) {
      var _that = this
      class addList {
        constructor(item) {
          _that.item = item
          console.log(_that.num)
          console.log(_that.item.id)

          // console.log(_that.itme.id)
        }
        addItem() {
          console.log(_that.item)
          _that.item.id = '我是' + _that.item.id
          _that.num = _that.item.id
        }
        listItem() {
          for (let i = 0; i < _that.list.length; i++) {
            console.log(_that.list[i])
            _that.item.id = _that.list[i]
          }
        }
      }
      let Item = new addList(item)
      console.log(Item)
      Item.addItem()
      Item.listItem()
    },
    Fn() {
      // 创建类
      class Start {
        // constructor 语法
        constructor(uname, x, y) {
          this.uname = uname
          this.x = x
          this.y = y
        }
        // 方法
        sing(song) {
          this.song = song
          console.log(song)
        }
        add() {
          console.log(this.x)
          console.log(this.y)
          console.log(this.x + this.y)
        }
      }
      let ldh = new Start("刘德华", 1, 3)
      console.log(ldh)
      ldh.sing("冰雨")


      class Son extends Start {
        constructor(uname, x, y) {
          // 调用父类的方法
          super(uname, x, y)
        }
      }
      let son = new Son("刘德华", 3, 4)
      son.sing("笑红尘", 3, 5)

      son.add()
    },



  }
}
</script>
<style lang="less" scoped>
ul .active {
  color: red !important;
}
.title {
  text-align: justify;
  p {
    margin: 5px 0px;
  }
  .title-1 {
    font-weight: bold;
  }
  .title-2 {
    text-indent: 2em;
    span {
      color: #3288dd;
      cursor: pointer;
    }
  }
}
.helloWorld {
  text-align: justify;
}
</style>
