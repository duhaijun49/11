<template>
  <div class='var1'>
    <p>
      var <br />
      1、全局变量，可以先使用在声明，可以重复声明

    </p>
    <p>
      let <br />
      1、块级作用域{}<br />
      2、没有变量提升过程，必须先声明再使用，存在暂时性死区，不能重复声明，但是可以重新赋值
    </p>
    <p>
      const <br />
      1、块级作用域{}<br />
      2、没有变量提升过程，必须先声明再使用，存在暂时性死区，不能重复声明，但是不可重复声明，值不能修改
    </p>
  </div>
</template>
<style lang="less">
.var1 {
  padding: 20px;
  p {
    margin-bottom: 20px;
  }
}
</style>