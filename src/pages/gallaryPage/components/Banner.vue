<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg"/>
    </div>
    <fade-animation>
      <common-gallary
          :imgs="gallaryImgs"
          v-show="showGallary"
          @close="handleallaryClose"
          >
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 防止抖动
  // 1.触发BFC
  // 2.不指定高度，通过下内边距保证图片长宽比
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 25.2%
    text-align center
    padding-top .15rem
    .banner-img
      width 98%
</style>
