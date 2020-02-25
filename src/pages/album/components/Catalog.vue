<template>
  <div class="content">
    <div class="catalog-items">
      <div class="item-img"
        v-for="item of catalogItems"
        :key="item.id"
        >
        <img :src="item.imgUrl" class="img-content"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Catalog',
  data () {
    return {
      catalogItems: [{
        id: '1',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/85fuIqrd.png'
      }, {
        id: '2',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/FF1GcXYY.png'
      }, {
        id: '3',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/FxA4KZ5S.png'
      }, {
        id: '4',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/d957SXDw.png'
      }, {
        id: '5',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/wH3DEkPf.png'
      }, {
        id: '6',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/WdmOEPrb.png'
      }, {
        id: '7',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/P17cyFsW.png'
      }, {
        id: '8',
        imgUrl: 'https://pre.ih5.cn/v3/files/3859256/18087/A1UWPRbF.png'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .content
    position fixed
    width 100%
    height 100%
    background $bgColor
    .catalog-items
      position absolute
      top 6%
      width 100%
      height 88%
      .item-img
        overflow hidden
        width 49.5%
        height 0
        padding-bottom 39.4%
        float left
        .img-content
          padding .08rem
          width 100%
</style>
