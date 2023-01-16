<template>
  <Sliderview></Sliderview>
  <Posterview></Posterview>
</template>

<script>
import Sliderview from "../components/Sliderview.vue";
import Posterview from "../components/Posterview.vue";

export default {
  components: {
    Sliderview,
    Posterview

  }
}
</script>

<style>
  .box{
    width: 200px;
    height: 200px;
  }
</style>
