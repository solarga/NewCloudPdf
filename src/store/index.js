import Vue from 'vue'
import Vuex from 'vuex'
import DataStore from "@/data/store";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //语言内容库
    dataStore: DataStore,
    //用户配置
    userConfig: {
      userName: "guest",
      userState: false,
      userLanguage: 0,
      userLevel: 0,
      userLevelExpir: new Date,
      userNickName: ""
    },
    //语言列表
    LanguageList: [
      { langId: 0, text: "English" },
      { langId: 1, text: "Español" },
      { langId: 2, text: "عربى" },
      { langId: 3, text: "简体中文" },
      { langId: 4, text: "日本語" }
    ]
  },
  mutations: {
    //用户改变语言
    changeLanguage(state, langId) {
      state.userConfig.userLanguage = langId;
    },
    //改变用户
    changeUser(state, user) {
      state.userConfig = user;
    }
  },
  getters: {
    //当前配置
    CurrentConfig: state => { return state.dataStore[state.userConfig.userLanguage] },
    CurrentUserConfig: state => { return state.userConfig }
  },
  actions: {

  },
  modules: {
  }
})
