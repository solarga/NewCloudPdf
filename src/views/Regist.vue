<template>
  <div>
    <!-- appbar -->
    <AppBar></AppBar>
    <!-- sign -->
    <div class="main">
      <mu-container>
        <mu-row>
          <mu-col span="6">
            <div>
              <img src="../assets/login-img.png" />
            </div>
          </mu-col>
          <mu-col span="6">
            <mu-paper class="sign-form" :z-depth="2">
              <mu-form :model="signForm">
                <mu-row>
                  <mu-col>Sign Up</mu-col>
                </mu-row>
                <mu-row>
                  <mu-col>
                    <mu-form-item prop="input">
                      <mu-text-field placeholder="E-mail Address"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="input">
                      <mu-text-field placeholder="Password"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="input">
                      <mu-text-field placeholder="Confirm Password"></mu-text-field>
                    </mu-form-item>
                  </mu-col>
                </mu-row>
                <mu-row>
                  <mu-col>
                    <mu-button full-width color="primary">Regist</mu-button>
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
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>
<script>
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
export default {
  data() {
    return { signForm: {} };
  },
  methods: {
    test() {
      this.$baidu.get("").then(res => {
        console.log(res);
      });
    }
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
  .sign-form {
    font-size: 28px;
    height: 440px;
    background-color: #fafafa;
    padding: 20px 80px 20px 80px;
    .or {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      color: #9e9e9e;
    }
  }
}
</style>