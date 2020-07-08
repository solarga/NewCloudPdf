<template>
  <div>
    <!-- appbar -->
    <AppBar></AppBar>
    <!-- main context -->
    <div class="mainArea">
      <mu-container>
        <!-- input email -->
        <div class="main" v-show="mainArea.inputEmailArea">
          <mu-row>
            <mu-col span="4" offset="4" class="title">找回密码</mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4" class="description">验证码将会发送至你的注册邮箱</mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4" class="text-input">
              <mu-form :model="vForm" ref="form">
                <mu-form-item prop="mailAddress" :rules="validateRules.mailAddressRules">
                  <mu-text-field v-model="vForm.mailAddress" full-width placeholder="电子邮件地址"></mu-text-field>
                </mu-form-item>
              </mu-form>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4">
              <mu-button color="primary" full-width @click="sendCode()">下一步</mu-button>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4" class="tips">
              <mu-tooltip content="如果您的邮箱不可用了，请联系 gaojl@gaojl.com提供证据。">
                <span>邮箱地址不可用？</span>
              </mu-tooltip>
            </mu-col>
          </mu-row>
        </div>
        <!-- receive vcode -->
        <div class="main" v-show="mainArea.receiveCodeArea">
          <mu-row>
            <mu-col span="4" offset="4" class="title">找回密码</mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4" class="description">验证码已经发送至以下邮箱，请注意查收</mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4">
              <mu-text-field v-model="vForm.mailAddress" full-width disabled></mu-text-field>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4">
              <mu-form :model="vForm" ref="form1">
                <mu-form-item
                  prop="verificationCode"
                  :rules="validateRules.verificationCodeRules"
                  :error-text="err"
                >
                  <mu-text-field
                    v-model="vForm.verificationCode"
                    full-width
                    placeholder="请输入您收到的验证码"
                  ></mu-text-field>
                </mu-form-item>
              </mu-form>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4" class="text-input">
              <mu-button color="primary" full-width @click="receiveCode">下一步</mu-button>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4">
              <mu-button
                color="secondary"
                full-width
                :disabled="btnResend.state"
                @click="computeTime"
              >{{btnResend.text}}</mu-button>
            </mu-col>
          </mu-row>
          <mu-row>
            <mu-col span="4" offset="4" class="tips">
              <mu-tooltip content="如果您的邮箱不可用了，请联系 gaojl@gaojl.com提供证据。">
                <span>没有收到验证码？</span>
              </mu-tooltip>
            </mu-col>
          </mu-row>
        </div>
        <!-- change password -->
        <div class="main" v-show="mainArea.changePassArea">
          <mu-form :model="vForm" ref="form2">
            <mu-row>
              <mu-col span="4" offset="4" class="title">找回密码</mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="4" offset="4" class="description">已验证通过，请输入新密码。</mu-col>
            </mu-row>
            <mu-row class="text-input">
              <mu-col span="4" offset="4">
                <mu-form-item prop="newPassword" :rules="validateRules.passwordRules">
                  <mu-text-field
                    v-model="vForm.newPassword"
                    full-width
                    placeholder="请输入新密码"
                    :action-icon="visibility ? 'visibility_off' : 'visibility'"
                    :action-click="() => (visibility = !visibility)"
                    :type="visibility ? 'text' : 'password'"
                  ></mu-text-field>
                </mu-form-item>
              </mu-col>
            </mu-row>
            <mu-row class="text-input">
              <mu-col span="4" offset="4">
                <mu-form-item prop="confirmPassword" :rules="validateRules.passwordRules">
                  <mu-text-field
                    v-model="vForm.confirmPassword"
                    full-width
                    placeholder="请再次输入"
                    :action-icon="visibility ? 'visibility_off' : 'visibility'"
                    :action-click="() => (visibility = !visibility)"
                    :type="visibility ? 'text' : 'password'"
                  ></mu-text-field>
                </mu-form-item>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="4" offset="4">
                <mu-button color="primary" full-width @click="changePassword">提交</mu-button>
              </mu-col>
            </mu-row>
          </mu-form>
        </div>
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
      //form 数据
      vForm: {
        mailAddress: "",
        verificationCode: "",
        newPassword: "",
        confirmPassword: ""
      },
      //验证模板
      validateRules: {
        mailAddressRules: [
          { validate: val => !!val, message: "邮箱地址不能为空" },
          {
            validate: val =>
              /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val),
            message: "请输入正确的邮件地址"
          }
        ],
        verificationCodeRules: [
          { validate: val => !!val, message: "新密码不能为空" },
          {
            validate: val => /^\d{6}$/.test(val),
            message: "应由字母数字下划线组成，且首位应为字母,大于等于8位"
          }
        ],
        passwordRules: [
          { validate: val => !!val, message: "新密码不能为空" },
          {
            validate: val => /^[a-zA-Z]\w{7,17}$/.test(val),
            message: "应由字母数字下划线组成，且首位应为字母,大于等于8位"
          },
          {
            validate: val => val == this.vForm.newPassword,
            message: "两次输入密码不一致，请检查"
          }
        ]
      },
      serverCode: "123456",
      visibility: false,
      err: "",

      //再次发送code按钮控制
      btnResend: { state: true, text: "" },
      //显示区域控制
      mainArea: {
        inputEmailArea: true,
        receiveCodeArea: false,
        changePassArea: false
      }
    };
  },
  methods: {
    //发送验证码
    sendCode() {
      this.$refs.form.validate().then(result => {
        if (result) {
          this.mainArea.inputEmailArea = false;
          this.mainArea.receiveCodeArea = true;
          this.computeTime();
        }
      });
    },
    //重发验证码倒数时间计算
    computeTime() {
      this.$toast.success({
        message: "验证码已发到您邮箱。",
        position: "top",
        close: false,
        time: 5000
      });
      this.btnResend.state = true;
      let i = 0;
      let times = setInterval(() => {
        if (i < 60) {
          i++;
          this.btnResend.text = `${60 - i}秒后可重发`;
        } else {
          this.btnResend.text = "重新发送验证码";
          this.btnResend.state = false;
          clearInterval(times);
        }
      }, 1000);
    },
    //验证码验证
    receiveCode() {
      this.$refs.form1.validate().then(result => {
        if (result) {
          if (this.serverCode == this.vForm.verificationCode) {
            this.mainArea.receiveCodeArea = false;
            this.mainArea.changePassArea = true;
          } else {
            this.$toast.error({
              message: "验证码不正确。",
              position: "top",
              close: false,
              time: 5000
            });
          }
        }
      });
    },
    //修改密码
    changePassword() {
      this.$refs.form2.validate().then(result => {
        if (result) {
          //密码修改
          this.$alert("密码重置成功,", "操作", {
            typr: "success"
          }).then(() => {
            this.$router.push("/");
            this.$toast.success({
              message: "密码重置成功,请重新登录。",
              position: "top",
              close: false,
              time: 5000
            });
          });
        }
      });
    }
  },
  components: {
    AppBar,
    Footer
  }
};
</script>

<style lang="less" scoped>
.mainArea {
  background: lemonchiffon;
  padding-top: 120px;
  padding-bottom: 120px;
  .main {
    .title {
      font-size: 24px;
    }
    .description {
      font-size: 16px;
      color: #757575;
    }
    .text-input {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .tips {
      margin-top: 10px;
      color: #757575;
    }
  }
}
</style>>
