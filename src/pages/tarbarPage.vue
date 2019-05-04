<template>
  <div class="tarbarPage">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar class="tarbarDiv">
      <tabbar-item selected link="/homePage">
        <img slot="icon" src="../assets/img/homePage.png">
        <img slot="icon-active" src="../assets/img/homePage_active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/pay">
        <img slot="icon" src="../assets/img/pay.png">
        <img slot="icon-active" src="../assets/img/pay_active.png">
        <span slot="label">下单</span>
      </tabbar-item>
      <tabbar-item link="/settle">
        <img slot="icon" src="../assets/img/settle.png">
        <img slot="icon-active" src="../assets/img/settle_active.png">
        <span slot="label">结算</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
    }
  },
  created () {
  },
  activated () {
    this.$router.replace({
      path: 'homePage'
    })
  }
}
</script>

<style lang="less" scoped>
  .tarbarPage {
    .tarbarDiv {
      .weui-tabbar__item {
        text-decoration: none;
        padding-top: 8px;
        height: 48px;
      }
    }
  }
</style>
