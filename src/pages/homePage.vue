<template>
  <div>
  </div>
</template>

<script>
import {axiosAjax} from '../assets/axiosHttp'
export default {
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
    }
  }
}
</script>

<style lang="less" scoped>

</style>
