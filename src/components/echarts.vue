<template>
  <div class='echarts1'>
    <p class='title'> 一：npm命令安装Echarts</p>
    npm install echarts --save<br><br>
    <p class='title'>二：在main.js使用import引入echarts<br><br></p>
    // 引入echarts<br><br>
    import * as echarts from 'echarts'<br><br>

    // 设置全局变量<br><br>
    Vue.prototype.$echarts = echarts<br><br>
    <el-link
      class='title'
      type="primary"
      href="https://echarts.apache.org/handbook/zh/how-to/data/dynamic-data/"
    >三：echarts文档链接</el-link>
    <div
      id="main"
      style="width: 100%;height: 400px;"
    ></div>
    {{params1}}
    <div>
      <el-button @click='btn'>添加</el-button>
      <ul
        v-for='item in imgList'
        :key='item.id'
      >
        <li>
          <p class='el-icon-folder-opened'>{{item.content}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'echarts入门示例',
      data: ['销量'],
      xAxis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      params1: {
        name: '',
        value: ''
      },
      imgList: [
        {
          content: 1
        }
      ],
      num: 1
    }
  },
  mounted() {
    this.myEcharts()
  },
  methods: {
    btn() {
      this.num++
      console.log(this.num)
      this.imgList.push({ content: this.num });
    },
    myEcharts() {
      this.myChart = this.$echarts.init(document.getElementById('main'));
      //配置图表
      var option = {
        title: {
          text: this.text,
        },
        tooltip: {},
        legend: {
          data: this.data
        },
        xAxis: {
          data: this.xAxis
        },
        itemStyle: {
          color: '#000'
          // ...
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      this.myChart.setOption(option);
      this.myChart.on('click', (params) => { // 监听点击事件，此图只给纵轴添加了点击事件，所以不需要判断
        console.log('点击纵轴', params)
        this.params1.name = params.name
        this.params1.value = params.value
        // 代码逻辑todo
      })
    }
  }
}
</script>
<style lang="less">
.echarts1 {
  text-align: justify;
}
</style>