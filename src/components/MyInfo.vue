<template>
  <div>
    <mu-drawer :open.sync="fs" right="right" width="360px" :docked="false" @close="closeMyInfo">
      <mu-list textline="two-line">
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>账号</mu-list-item-title>
            <mu-list-item-sub-title>{{CurrentUserConfig.userName}}</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-sub-header>基本信息</mu-sub-header>
        <mu-list-item :ripple="false">
          <mu-list-item-title>昵称</mu-list-item-title>
          <mu-list-item-action>
            <mu-list-item-sub-title>{{CurrentUserConfig.userNickName}}</mu-list-item-sub-title>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-sub-header>安全</mu-sub-header>
        <mu-list-item>
          <mu-list-item-title>邮件验证</mu-list-item-title>
          <mu-list-item-action>
            <mu-switch readonly></mu-switch>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-sub-header>高级</mu-sub-header>
        <mu-list-item>
          <mu-list-item-title>订阅用户</mu-list-item-title>
          <mu-list-item-action>
            <mu-switch readonly></mu-switch>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-title>订阅有效期</mu-list-item-title>
          <mu-list-item-content>
            <mu-list-item-title>2020年</mu-list-item-title>
            <mu-list-item-sub-title>05-25</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  props: { formStatus: Boolean },
  data() {
    return {
      fs: false
    };
  },
  methods: {
    closeMyInfo() {
      this.$emit("update:formStatus", false);
    }
  },
  watch: {
    formStatus: function() {
      this.fs = this.formStatus;
    }
  },
  computed: {
    CurrentUserConfig: function() {
      return this.$store.getters.CurrentUserConfig;
    }
  }
};
</script>

<style>
</style>