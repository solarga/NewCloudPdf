<template>
  <div>
    <!-- <mu-divider></mu-divider> -->
    <mu-container class="footer">
      <mu-row>
        <mu-col span="2">
          <div>
            <!-- <mu-button small flat>
              <mu-icon size="16" value="supervisor_account"></mu-icon>
              {{CurrentConfig.footer.about}}
            </mu-button>-->

            <ul>
              <li>
                <h3>Service</h3>
              </li>
              <li>{{CurrentConfig.footer.about}}</li>
              <li>{{CurrentConfig.footer.support}}</li>
            </ul>
          </div>
        </mu-col>
        <mu-col span="2">
          <div>
            <!-- <mu-button small flat>
              <mu-icon size="16" value="shop"></mu-icon>
              {{CurrentConfig.footer.subscription}}
            </mu-button>-->

            <ul>
              <li>
                <h3>Price</h3>
              </li>
              <li>{{CurrentConfig.footer.subscription}}</li>
              <li>{{CurrentConfig.footer.privacy}}</li>
            </ul>
          </div>
        </mu-col>
        <mu-col span="2">
          <div>
            <!-- <mu-button small flat>
              <mu-icon size="16" value="shop"></mu-icon>
              {{CurrentConfig.footer.subscription}}
            </mu-button>-->

            <ul>
              <li>
                <h3>Suppot</h3>
              </li>
              <li>{{CurrentConfig.footer.subscription}}</li>
              <li>{{CurrentConfig.footer.privacy}}</li>
            </ul>
          </div>
        </mu-col>
        <mu-col span="6">
          <div>
            <ul class="footer-right">
              <li>{{CurrentConfig.footer.tips}}</li>
              <li>&copy; Copyright 2020 Gao.</li>
              <!-- <li>{{CurrentConfig.footer.copyRight}}</li> -->
              <li>
                <mu-button icon>
                  <mu-icon value=":iconfont icon-twitter1"></mu-icon>
                </mu-button>

                <mu-button icon>
                  <mu-icon value=":iconfont icon-facebookfacebook52"></mu-icon>
                </mu-button>
              </li>
            </ul>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
export default {
  computed: {
    CurrentConfig: function() {
      return this.$store.getters.CurrentConfig;
    }
  }
};
</script>

<style scoped lang="less">
.footer {
  font-size: 14px;
  font-weight: 200;
  color: #c2c1c1;
  ul {
    list-style-type: none;
    border-right: solid 1px #777;
  }

  .footer-right {
    text-align: right;
    border: none;
  }
}
</style>