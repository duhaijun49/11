<template>
  <div class='new1'>
    <p class='title'>
      一般创建多个有相同属性/方法的对象，就会去写构造函数，就会去new<br>
      如果只是一个单独的对象，直接使用字面量就行了
    </p>
    <p class='title'>
      构造函数可以通过new出来的函数对象，声明对象或者方法。构造函数使用了this关键字。<br>
      构造函数方法很好用，但是存在一个浪费内存
    </p>
    <el-button @click='newBtn'>示例</el-button>
    <p>我叫{{uname}}，今年{{age}}，{{song}}</p>
    <p>我叫{{uname1}}，今年{{age1}}，{{song1}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: '',
      age: '',
      song: '',
      uname1: '',
      age1: '',
      song1: ''
    }
  },

  methods: {
    newBtn() {
      let _that = this
      let NewFn = function (uname, age) {
        this.uname = uname,
          this.age = age,
          this.sing = (song) => {
            _that.song = song
            console.log(_that.song)
          }
        this.sing1 = (song) => {
          _that.song1 = song
          console.log(_that.song1)
        }
      }
      let obj = new NewFn("测试", 18)
      console.log(obj)
      //   alert(JSON.stringify(obj))
      this.uname = obj.uname
      this.age = obj.age

      obj.sing("测试在测试")


      function Cat(name, color) {
        this.name = name;
        this.color = color;
        this.type = "猫科动物";
        this.eat = function () {
          alert("吃老鼠");
        };
      }


      //生成实例：
      var cat1 = new Cat("大毛", "黄色");
      var cat2 = new Cat("二毛", "黑色");
      // alert(cat1.type);     // 猫科动物
      cat1.eat();    // 吃老鼠  

      alert(cat1.eat == cat2.eat); //false

    }

  }
}
</script>
<style lang="less">
.new1 {
  padding: 20px;
}
</style>