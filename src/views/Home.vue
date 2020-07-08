<template>
  <div>
    <!-- appbar -->
    <AppBar></AppBar>
    <!-- body -->
    <div class="main-bg">
      <mu-container class="main">
        <mu-row>
          <mu-col span="12">
            <div class="title">{{CurrentConfig.banner.bannerTitle}}</div>
          </mu-col>
        </mu-row>
        <mu-row>
          <mu-col span="12">
            <div class="title-description">{{CurrentConfig.banner.bannerContent}}</div>
          </mu-col>
        </mu-row>
        <mu-row v-for="(item,index) in CurrentConfig.appList" :key="index">
          <mu-col v-for="i in item" :key="i.appid" :span="i.span">
            <router-link
              tag="div"
              to="/Convert"
              :style="{backgroundColor:i.bgcolor}"
              class="grid-cell"
            >
              <mu-row>
                <mu-col class="icon">
                  <mu-icon size="38" :value="i.icon"></mu-icon>
                </mu-col>
              </mu-row>
              <mu-row>
                <mu-col class="title">{{i.title}}</mu-col>
              </mu-row>
              <mu-row>
                <mu-col class="description">{{i.description}}</mu-col>
              </mu-row>
            </router-link>
          </mu-col>
        </mu-row>
      </mu-container>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
export default {
  components: { AppBar, Footer },
  data() {
    return {};
  },
  computed: {
    CurrentConfig: function() {
      return this.$store.getters.CurrentConfig;
    }
  }
};
</script>
<style lang="less" scoped>
.main-bg {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 80px;
}
.main {
  text-align: center;
}
.title {
  font-size: 24px;
}
.title-description {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 100;
}
.grid-cell {
  height: 180px;
  margin: 1px;
  color: #ffffff;
  padding: 20px 10px 20px 10px;
  text-align: left;
  .title {
    font-size: 20px;
  }
  .description {
    font-size: 14px;
    color: #efefef;
  }
}
</style>