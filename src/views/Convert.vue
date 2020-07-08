<template>
  <div>
    <!-- appbar -->
    <AppBar ref="appBar"></AppBar>
    <!-- banner -->
    <div class="main-bg">
      <div class="banner">
        <mu-container>
          <mu-row>
            <mu-col span="12" class="title">Convert PDF to Word</mu-col>
          </mu-row>
          <mu-row>
            <mu-col
              span="12"
              class="content"
            >Convert your PDF to WORD documents with incredible accurancy.</mu-col>
          </mu-row>
        </mu-container>
      </div>
      <!-- convert -->
      <div class="convert">
        <mu-container>
          <div class="conver-main">
            <mu-row>
              <mu-col span="12">
                <mu-linear-progress
                  size="2"
                  :value="UploadFileState"
                  mode="determinate"
                  color="green"
                ></mu-linear-progress>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="12">
                <mu-stepper :active-step="ActiveStep">
                  <mu-step>
                    <mu-step-label>
                      <form>
                        <input type="file" ref="upfile" @change="uploadFile" hidden />
                        <mu-button
                          color="primary"
                          @click="chooseFile()"
                          :disabled="CurrentStep.btnChooseFile"
                        >Choose File</mu-button>
                      </form>
                    </mu-step-label>
                  </mu-step>
                  <mu-step>
                    <mu-step-label>
                      <mu-button
                        :disabled="CurrentStep.btnConvert"
                        color="primary"
                        v-loading="Loading"
                        data-mu-loading-size="24"
                      >Convert</mu-button>
                    </mu-step-label>
                  </mu-step>
                  <mu-step>
                    <mu-step-label>
                      <mu-button
                        color="primary"
                        :disabled="CurrentStep.btnDownloadFile"
                      >Download File</mu-button>
                    </mu-step-label>
                  </mu-step>
                </mu-stepper>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="2">{{CurrentStep.tipChooseFile}}</mu-col>
              <mu-col span="4" offset="2">{{CurrentStep.tipConvert}}</mu-col>
              <mu-col span="2" offset="2">{{CurrentStep.tipDownloadFile}}</mu-col>
            </mu-row>
          </div>
        </mu-container>
      </div>
      <!-- content -->
      <div class="content-area">
        <mu-container>
          <mu-row>
            <mu-col span="6">
              <img src="@/assets/logo.png" />
            </mu-col>
            <mu-col span="6">
              <mu-row class="title">
                <mu-col>How to convert to PDF</mu-col>
              </mu-row>
              <mu-row class="content">
                <mu-col span="12">
                  <ol>
                    <li>Upload your file to our online PDF converter.</li>
                    <li>The tool will instantly upload and transform the file into a PDF.</li>
                    <li>Compress, edit or modify the output file, if necessary.</li>
                    <li>Download the PDF to your device, or export it to Dropbox or Google Drive.</li>
                  </ol>
                </mu-col>
              </mu-row>
            </mu-col>
          </mu-row>
        </mu-container>
      </div>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      ActiveStep: 0, //步骤标识
      CurrentStep: {}, //当前步骤控制器
      UploadFileState: 0, //上传文件进度
      //步骤控制内容表
      StepList: [
        {
          btnChooseFile: false,
          tipChooseFile: "Please choose the file",
          btnConvert: true,
          tipConvert: "",
          btnDownloadFile: true,
          tipDownloadFile: ""
        },
        {
          btnChooseFile: true,
          tipChooseFile: "Upload finished",
          btnConvert: true,
          tipConvert: "Please wait, it's converting...",
          btnDownloadFile: true,
          tipDownloadFile: ""
        },
        {
          btnChooseFile: true,
          tipChooseFile: "Upload finished",
          btnConvert: true,
          tipConvert: "Convert finished",
          btnDownloadFile: false,
          tipDownloadFile: "请下载"
        }
      ],
      Loading: false //转换按钮loading状态
    };
  },
  methods: {
    //触发选取文件click
    chooseFile() {
      this.$refs.upfile.click();
    },
    //上传文件
    uploadFile() {
      //判断是否选取文件
      if (this.$refs.upfile.files.length != 0) {
        let file = this.$refs.upfile.files[0];
        //判断文件是否大于5MB
        if (file.size > 5242880) {
          //判断是否登录，是否为订阅用户并且没有到期
          let timeStamp = new Date().getTime();
          //此处还需要优化判断
          if (
            this.CurrentUserConfig.userState &&
            this.CurrentUserConfig.userLevel == 1 &&
            timeStamp <= this.CurrentUserConfig.userLevelExpir
          ) {
            this.CurrentStep.btnChooseFile = true;
            this.CurrentStep.tipChooseFile = "Uploading";
            console.log(this.$refs.upfile.files);
            const t = setInterval(() => {
              if (this.UploadFileState < 100) {
                this.UploadFileState++;
              } else {
                clearInterval(t);
                this.ActiveStep = 1;
                this.Loading = true;
              }
            }, 50);
          } else {
            this.$alert("您的文件大于5MB，需要订阅服务才能转换", {
              type: "error"
            }).then(() => {
              //调用快捷登录框
              this.$refs.appBar.showLogin();
            });
          }
        } else {
          this.CurrentStep.btnChooseFile = true;
          this.CurrentStep.tipChooseFile = "Uploading";

          console.log(this.$refs.upfile.files);
          const t = setInterval(() => {
            if (this.UploadFileState < 100) {
              this.UploadFileState++;
            } else {
              clearInterval(t);
              this.ActiveStep = 1;
              this.Loading = true;
            }
          }, 50);
        }
      } else {
        this.$alert("请选择需要转换的文件", "转换");
      }
    }
  },
  created() {
    //初始化步骤控制内容
    this.CurrentStep = this.StepList[this.ActiveStep];
  },
  watch: {
    ActiveStep: function(b) {
      this.CurrentStep = this.StepList[b];
    }
  },
  computed: {
    CurrentConfig: function() {
      return this.$store.getters.CurrentConfig;
    },
    CurrentUserConfig: function() {
      return this.$store.getters.CurrentUserConfig;
    }
  },
  components: {
    AppBar,
    Footer
  }
};
</script>
<style scoped lang="less">
.main-bg {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 80px;
}
.convert {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #ffffff;
  .conver-main {
    background-color: #bf360c;
    padding-bottom: 20px;
  }
}
.content-area {
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  font-weight: 100;
  .title {
    font-size: 20px;
  }
  .content {
    padding: 10px;
    text-align: left;
    font-size: 16px;
  }
}
.banner {
  text-align: center;
  .title {
    font-size: 42px;
  }
  .content {
    font-size: 18px;
    font-weight: 100;
    color: #757575;
  }
}
</style>