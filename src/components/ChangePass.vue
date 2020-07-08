<template>
  <div>
    <mu-dialog :title="CurrentConfig.loginForm.title" width="380" :open="fs">
      <mu-form ref="form" :model="validateForm">
        <mu-form-item>
          <mu-text-field :placeholder="$store.state.userConfig.userName" :disabled="true"></mu-text-field>
        </mu-form-item>
        <mu-form-item label prop="password" :rules="passwordRules">
          <mu-text-field
            type="password"
            v-model="validateForm.password"
            prop="password"
            :placeholder="CurrentConfig.loginForm.passTips"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item label prop="password" :rules="passwordRules">
          <mu-text-field
            type="password"
            v-model="validateForm.password"
            prop="password"
            :placeholder="CurrentConfig.loginForm.passTips"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item label prop="password" :rules="passwordRules">
          <mu-text-field
            type="password"
            v-model="validateForm.password"
            prop="password"
            :placeholder="CurrentConfig.loginForm.passTips"
          ></mu-text-field>
        </mu-form-item>
      </mu-form>
      <div class="btnArea">
        <mu-row gutter>
          <mu-col span="6">
            <mu-button
              color="primary"
              full-width
              @click="submitLogin"
            >{{CurrentConfig.loginForm.btnLogin}}</mu-button>
          </mu-col>
          <mu-col span="6">
            <mu-button
              full-width
              color="secondary"
              @click="closeChangePass"
            >{{CurrentConfig.loginForm.btnCancle}}</mu-button>
          </mu-col>
        </mu-row>
      </div>
      <mu-divider></mu-divider>
      <div class="textArea">
        <mu-row>
          <mu-col span="3">
            <router-link
              to="/ForgetPass"
              style="color:#757575"
            >{{CurrentConfig.loginForm.forgetPass}}</router-link>
          </mu-col>
        </mu-row>
      </div>
    </mu-dialog>
  </div>
</template>
<script>
// import axios from "axios";
// import qs from "querystring";
export default {
  name: "ChangPass",
  props: { formStatus: Boolean },
  data() {
    return {
      //登录
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 4, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 8 && val.length <= 20,
          message: "密码长度小于8位或大于20位"
        }
      ],
      validateForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //登录
    submitLogin() {
      const loading = this.$loading({
        text: "loading..."
      });
      // axios.post("", qs.stringify(this.validateForm)).then(res => {
      //   console.log(res);
      // });

      setTimeout(() => {
        let userConfig = {
          userName: "ga",
          userState: true,
          userLanguage: 0,
          userLevel: 0,
          userLevelExpir: new Date(),
          userNickName: ""
        };
        this.$store.commit("changeUser", userConfig);
        loading.close();
        this.$toast.success({
          message: "您已经成功登录",
          position: "bottom-end",
          close: false,
          time: 5000
        });
        this.closeLoginForm();
      }, 3000);
    },
    //关闭登录框
    closeChangePass() {
      this.$emit("update:formStatus", false);
    }
  },
  computed: {
    fs: function() {
      return this.formStatus;
    },
    CurrentConfig: function() {
      return this.$store.getters.CurrentConfig;
    }
  }
};
</script>
<style scoped lang="less">
.btnArea {
  margin-bottom: 20px;
}
.textArea {
  margin-top: 10px;
  font-size: 14px;
}
</style>