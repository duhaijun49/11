<template>
  <div class='function1'>
    function<br />
    1、funciotn在调用时，调用方法可以提升<br />
    2、可以new 构造函数<br />
    3、this 指向window<br />
    箭头函数<br />
    1、箭头函数在调用时，调用方法不可以提升<br />
    2、不可以new 构造函数<br />
    3、this 指向调用者<br />
  </div>
</template>
<style lang="less">
.function1 {
  line-height: 2;
  padding: 20px;
}
</style>