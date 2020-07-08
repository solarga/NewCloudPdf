<template>
  <div>
    <form>
      <input type="file" ref="upfile" @change="getFiles" hidden />
      <mu-button color="primary" @click="chooseFile()" :disabled="disabled">Choose File</mu-button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean }
  },
  methods: {
    getFiles() {
      console.log(this.$refs.upfile.files[0]);
    },
    chooseFile() {
      this.$refs.upfile.click();
    }
  }
};
</script>

<style>
</style>