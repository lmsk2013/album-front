<template>
  <div class="warpper">
    <swiper :options="swiperOption" class="swiper">
        <!-- slides -->
        <swiper-slide>
          <cover></cover>
        </swiper-slide>
        <swiper-slide>
          <catalog></catalog>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import FadeAnimation from '../../common/fade/FadeAnimation'
import Catalog from './components/Catalog'
import Cover from './components/Cover'
export default {
  name: 'Album',
  components: {
    FadeAnimation,
    Catalog,
    Cover
  },
  data () {
    return {
      coverImgUrl: 'http://118.190.155.59/img/cover.png',
      swiperOption: {
        direction: 'vertical'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper
    position fixed
    width 100%
    height 100%
</style>
