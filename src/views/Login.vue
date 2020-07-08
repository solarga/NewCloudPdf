<template>
  <div>
    <!-- AppBar -->
    <AppBar></AppBar>
    <!-- main -->
    <div class="main">
      <mu-container>
        <mu-row>
          <mu-col span="7">
            <div class="login">
              <img src="../assets/login.png" />
            </div>
          </mu-col>
          <mu-col span="5">
            <mu-paper class="sign-form" :z-depth="2">
              <mu-form :model="signForm">
                <mu-row>
                  <mu-col>Sign In</mu-col>
                </mu-row>
                <mu-row>
                  <mu-col>
                    <mu-form-item>
                      <mu-text-field placeholder="E-mail" v-model="signForm.userName"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="input">
                      <mu-text-field placeholder="Password" v-model="signForm.passWord"></mu-text-field>
                    </mu-form-item>
                  </mu-col>
                </mu-row>
                <mu-row>
                  <mu-col>
                    <mu-button full-width color="primary">Login</mu-button>
                  </mu-col>
                </mu-row>
                <mu-row class="or">
                  <mu-col span="5"></mu-col>
                  <mu-col span="2">or</mu-col>
                  <mu-col span="5"></mu-col>
                </mu-row>
                <mu-row gutter>
                  <mu-col span="6">
                    <mu-button full-width color="secondary">
                      <mu-icon value=":iconfont icon-google-circle" left></mu-icon>google
                    </mu-button>
                  </mu-col>
                  <mu-col span="6">
                    <mu-button full-width color="success">
                      <mu-icon value=":iconfont icon-facebookfacebook52" left></mu-icon>facebook
                    </mu-button>
                  </mu-col>
                </mu-row>
              </mu-form>
            </mu-paper>
          </mu-col>
        </mu-row>
      </mu-container>
    </div>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      signForm: { userName: "", passWord: "" },
      formRules: {
        userName: [{ validate: val => !!val, message: "不能为空" }],
        passWord: [{ validate: val => !!val, message: "不能为空" }]
      }
    };
  },
  components: {
    AppBar,
    Footer
  }
};
</script>

<style scoped lang="less">
.main {
  text-align: center;
  background-color: #eeeeee;
  padding-top: 120px;
  padding-bottom: 120px;
  .login {
    img {
      width: 570px;
      height: 400px;
    }
  }
  .sign-form {
    font-size: 28px;
    height: 400px;
    background-color: #fafafa;
    padding: 30px 40px 20px 40px;
    .or {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      color: #9e9e9e;
    }
  }
}
</style>