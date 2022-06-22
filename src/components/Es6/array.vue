<template>
  <div>
    111
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '李明',
      age: 18
    }
  },
  created() {

  },
  mounted() {
    var obj = {
      name: '李明',
    }
    var obj1 = {
      age: '13',
    }
    var arr = Object.assign(obj, obj1)
    console.log(arr)
  }
}
</script>