<template>
  <div class="homePage">
    <tab bar-active-color="#dd65a0" active-color="#dd65a0">
      <tab-item selected @on-item-click="onItemClick" >今天</tab-item>
      <tab-item @on-item-click="onItemClick">明天</tab-item>
      <tab-item @on-item-click="onItemClick">后天</tab-item>
    </tab>
    <game-cell :data="item" v-for="(item, index) in gameData" :key="index"> </game-cell>
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
      gameData: {},
      todayGameData: [
        {
          teams: [
            {
              id: 'baxi',
              value: '巴西'
            }, {
              id: 'agenting',
              value: '阿根廷'
            }
          ],
          date: '2018-06-08',
          time: '20:00'
        }, {
          teams: [
            {
              id: 'yingguo',
              value: '英国'
            }, {
              id: 'faguo',
              value: '法国'
            }
          ],
          date: '2018-06-08',
          time: '22:00'
        }, {
          teams: [
            {
              id: 'deguo',
              value: '德国'
            }, {
              id: 'eluosi',
              value: '俄罗斯'
            }
          ],
          date: '2018-06-08',
          time: '23:00'
        }
      ],
      tomorrowGameData: [
        {
          teams: [
            {
              id: 'helan',
              value: '荷兰'
            }, {
              id: 'kelimiya',
              value: '克里米亚'
            }
          ],
          date: '2018-06-08',
          time: '20:00'
        }, {
          teams: [
            {
              id: 'baxi',
              value: '巴西'
            }, {
              id: 'wukelan',
              value: '乌克兰'
            }
          ],
          date: '2018-06-08',
          time: '22:00'
        }, {
          teams: [
            {
              id: 'saierweiya',
              value: '塞尔维亚'
            }, {
              id: 'bilishi',
              value: '比利时'
            }
          ],
          date: '2018-06-08',
          time: '23:00'
        }
      ],
      afterTomorrowGameData: [
        {
          teams: [
            {
              id: 'banama',
              value: '巴拿马'
            }, {
              id: 'ruidian',
              value: '瑞典'
            }
          ],
          date: '2018-06-12',
          time: '20:00'
        }, {
          teams: [
            {
              id: 'bolan',
              value: '波兰'
            }, {
              id: 'gelunbiya',
              value: '哥伦比亚'
            }
          ],
          date: '2018-06-12',
          time: '22:00'
        }, {
          teams: [
            {
              id: 'wulagui',
              value: '乌拉圭'
            }, {
              id: 'aiji',
              value: '埃及'
            }
          ],
          date: '2018-06-12',
          time: '23:00'
        }
      ]
    }
  },
  created () {
  },
  activated () {
    document.title = '首页'
    this.gameData = this.todayGameData
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
    onItemClick (index) {
      console.log('onItemClick - ' + index)
      if (index === 0) {
        this.gameData = this.todayGameData
      } else if (index === 1) {
        this.gameData = this.tomorrowGameData
      } else {
        this.gameData = this.afterTomorrowGameData
      }
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
