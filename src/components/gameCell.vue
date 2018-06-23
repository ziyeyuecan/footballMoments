<template>
  <div class="gameCell">
    <flexbox :gutter="0" class="gameCellFlexbox">
      <flexbox-item :span="4" class="gameCellFlexItem">
        <div class="gameTime">
          E组第二轮
          <br/>
          20:00
        </div>
      </flexbox-item>
      <flexbox-item class="gameCellFlexItem">
        <div class="gameVerbose">2</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'gameCell',
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .gameCell {
    height: 5rem;
    width: 100%;
    .gameCellFlexbox {
      height: 100%;
      .gameCellFlexItem {
        height: 100%;
        .gameTime {
          height: 100%;
          background-color: #1d6849;
          text-align: center;
          display: flex;
          justify-content: center;/*实现水平居中*/
          align-items:center; /*实现垂直居中*/
        }
        .gameVerbose {
          height: 100%;
          background-color: aqua;
        }
      }
    }
  }

</style>
