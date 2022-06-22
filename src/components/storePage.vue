<template>
  <div>
    {{list}}
    <p>------------</p>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {

    ...mapState(['list']),
    // ...mapMutations(['axiosAdd']),
  },
  created() {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("stateInfo", JSON.stringify(this.$store.state));
    });
    if (localStorage.getItem("stateInfo")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("stateInfo"))
        )
      );
    }

    localStorage.removeItem("stateInfo");
    console.log("名字", this.$store.state);
  },
  watch: {}
}
</script>