<template>
  <div class="container"
       @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide
            v-for="(item,index) in imgs"
            :key="index">
              <img class="gallary-img" :src="item"/>
          </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    // 弹性布局，主轴方向垂直，主轴上的对齐方式为居中
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -2rem
</style>
