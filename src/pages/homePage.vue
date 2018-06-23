<template>
  <div class="homePage">
    <tab bar-active-color="#dd65a0" active-color="#dd65a0">
      <tab-item selected @on-item-click="onItemClick" >今天</tab-item>
      <tab-item @on-item-click="onItemClick">明天</tab-item>
      <tab-item @on-item-click="onItemClick">后天</tab-item>
    </tab>
    <game-cell v-for="i in 3" :key="i"> </game-cell>
  </div>
</template>

<script>
import {axiosAjax} from '../assets/axiosHttp'
import { Tab, TabItem } from 'vux'
import gameCell from '../components/gameCell'
export default {
  components: {
    gameCell,
    Tab,
    TabItem
  },
  data () {
    return {
    }
  },
  created () {
  },
  activated () {
    document.title = '首页'
  },
  methods: {
    httpRequest () {
      let url = 'data/sk/101010100.html?_=1381891661455'
      // let param = {}
      let option = {
        method: 'GET',
        success: (data) => {
          alert('success - ' + JSON.stringify(data))
        },
        error: (error) => {
          alert('error - ' + JSON.stringify(error))
        }
      }
      axiosAjax(url, null, option)
    },
    onItemClick (e) {
      console.log('onItemClick - ' + e)
    }
  }
}
</script>

<style lang="less" scoped>
  .homePage {
    min-height: 100vh;
    height: 200px;
    overflow-x:hidden;
    overflow-y:scroll;
    -webkit-overflow-scrolling:touch;
  }
</style>
