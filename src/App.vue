<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.initCurrentConfig;
    this.$progress.start();
    this.$progress.done();
  }
};
</script>
<style>
body {
  background-color: #313030;
}
</style>
