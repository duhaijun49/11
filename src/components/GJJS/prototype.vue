<template>
  <div class='prototype1'>
    <p class='title'>什么是原型</p><br>

    我一般喜欢把原型比作模型，或者说模具更加贴切。比如说一个水杯，他是圆的还是方的就是由这个模具决定的，如果这个模具改变了样子，那么生产出来的水杯也会变了样子。<br><br>

    这样来描述，你可能会觉得，叫什么原型，叫构造器不是更贴切。没错，在这个例子中，模具就是水杯的构造器(constructor)。<br><br>

    那么原型和说的这个有什么关系呢。假设我们的这个水杯是有额外功能的，加热和制冷。那么问题就来了，构造器只能决定水杯的样子，是没办法给他提供加热和制冷的功能的。这个时候就需要原型(prototype)了。<br><br>

    一般情况，构造器决定样子，名称等固定的属性。原型决定的是功能，可以进行操作的方法。构造器(constructor)和原型(prototype)共同决定了一个物体的存在形式。<br><br>

    Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。

  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.newProto()
  },
  methods: {
    newProto() {
      function Cat(name, color) {
        this.name = name
        this.color = color
      }
      Cat.prototype.type = '猫科动物'
      Cat.prototype.eat = function () {
        console.log("吃老鼠");
      }
      var cat1 = new Cat("大毛", "黄色");
      var cat2 = new Cat("二毛", "黑色");
      console.log(cat1)
      console.log(cat2)
      console.log(cat1.type)
      console.log(cat2.type)
      cat1.eat()
      cat2.eat()
      console.log(Cat.prototype.constructor == cat1)
    }
  }
}
</script>
<style lang="less">
.prototype1 {
  text-align: justify;
}
</style>