<template>
  <!-- appbar -->
  <div>
    <mu-appbar style="width: 100%;" color="#7b1fa2">
      <div slot="left" class="logo">
        <img class="logo-img" src="../assets/logo.svg" />
      </div>
      <mu-menu slot="right">
        <mu-button flat>
          <mu-icon size="18" left value="language"></mu-icon>
          {{CurrentConfig.appBar.language}}
        </mu-button>
        <mu-list slot="content">
          <mu-list-item
            button
            v-for="lang in $store.state.LanguageList"
            :key="lang.langId"
            @click="changeLang(lang.langId)"
          >
            <mu-list-item-content>
              <mu-list-item-title>{{lang.text}}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>

      <mu-menu slot="right" open-on-hover v-if="UserInfo.userState">
        <mu-button flat>
          <mu-avatar color="teal">{{UserAvtar}}</mu-avatar>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="showMyInfo">
            <mu-list-item-content>
              <mu-list-item-title>我的信息</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="showChangePass">
            <mu-list-item-content>
              <mu-list-item-title>修改密码</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="signOut">
            <mu-list-item-content>
              <mu-list-item-title>登出</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <template v-else>
        <mu-button slot="right" flat @click="showLogin">{{CurrentConfig.appBar.login}}</mu-button>
        <mu-button slot="right" flat to="/regist">{{CurrentConfig.appBar.regist}}</mu-button>
      </template>
    </mu-appbar>
    <LoginForm :formStatus.sync="LoginFormState"></LoginForm>
    <ChangePass :formStatus.sync="ChangePassState"></ChangePass>
    <MyInfo :formStatus.sync="MyInfoState"></MyInfo>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import ChangePass from "@/components/ChangePass";
import MyInfo from "@/components/MyInfo";
export default {
  data() {
    return {
      LoginFormState: false,
      ChangePassState: false,
      MyInfoState: false
    };
  },
  methods: {
    //改变语言
    changeLang(id) {
      this.$store.commit("changeLanguage", id);
    },
    //显示登录框
    showLogin() {
      this.LoginFormState = true;
    },
    //显示修改密码框
    showChangePass() {
      this.ChangePassState = true;
    },
    //显示我的信息
    showMyInfo() {
      this.MyInfoState = true;
    },
    //注销登录
    signOut() {
      this.$confirm("确定退出登录吗？", "提示", {
        type: "warning"
      }).then(({ result }) => {
        if (result) {
          let userConfig = {
            userName: "guest",
            userState: false,
            userLanguage: 0,
            userLevel: 0,
            userLevelExpir: 0,
            userNickName: ""
          };
          this.$store.commit("changeUser", userConfig);
          this.$toast.success({
            message: "您已经退出",
            position: "top-end",
            close: false,
            time: 3000
          });
        }
      });
    }
  },
  computed: {
    CurrentConfig: function() {
      return this.$store.getters.CurrentConfig;
    },
    UserInfo: function() {
      return this.$store.state.userConfig;
    },
    UserAvtar: function() {
      return this.UserInfo.userName.slice(0, 2);
    }
  },
  components: { LoginForm, ChangePass, MyInfo }
};
</script>

<style scoped lang="less">
.logo {
  padding-left: 20px;
  .logo-img {
    width: 150px;
    height: 36px;
  }
}
</style>