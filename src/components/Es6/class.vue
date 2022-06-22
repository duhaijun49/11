<template>
  <div>
    <p class='title'>class类的创建</p><br>
    <p class='title1'>class类相当于语法糖，结合构造函数以及原型生成的，且原型和class类创建打印的结果是一样的</p><br>
    <p class='title1'>class类不用创建function，只需要创建class,利用constructor声明变量，方法直接写就可以了。</p><br>
    <p class='title1'>class类可以继承，通过extends和super 创建，使用</p><br>
    <p class='title1'>注：constructor里的this 是指向实例对象，方法里的this 指向的是调用者</p><br>
    <el-button @click='classBtn'>示例</el-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addNum: ''
    }
  },
  mounted() {
    this.classDome()
    this.classFather()

  },
  methods: {
    classBtn() {
      this.$router.push("/classPage").catch(err => { err })
    },
    classDome() {
      class ClassOne {
        constructor(uname, age) {
          this.uname = uname
          this.age = age
        }
        sing(song) {
          console.log(this)
          this.song = song
          console.log(this.song)
          //   使用extends 继承
          console.log(100000000)
        }
      }

      let obj = new ClassOne('杜海军', 18,)
      console.log(obj)
      console.log(obj.uname)
      obj.sing('唱歌')


      class Son extends ClassOne {

      }
      let son = new Son()
      son.sing()
      console.log(son)

    },


    // sunClass() {
    //   class sun {
    //     constructor(arr) {
    //       this.arr = arr
    //     }
    //     add() {
    //       var sum = 0;
    //       for (var i = 0; i < arr.length; i++) {
    //         sum += arr[i];
    //       }
    //       return sum;
    //     }
    //   }
    //   let son = new Son(1, 5)
    //   son.add()
    // },




    classFather() {
      var _that = this
      class Father {
        constructor(arr) {
          this.arr = arr
        }
        add() {
          var sum = 0;
          for (var i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
          }
          return sum;
        }
      }
      class Son extends Father {
        constructor(arr) {
          super(arr)
          let a = super.add()
          console.log(a)
        }
      }
      let son = new Son([1, 2, 3])
      son.add()
    }
  }
}
</script>