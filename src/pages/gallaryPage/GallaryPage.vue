<template>
  <div>
    <gallary-header
      :headerImg="headerImg"
      :titleImg="titleImg"></gallary-header>
    <div class="content">
      <gallary-banner
        v-for="item of gallaryItems"
        :key="item.id"
        :bannerImg="item.bannerImg"
        :gallaryImgs="item.gallaryImgs"
      ></gallary-banner>
    </div>
  </div>
</template>

<script>
import GallaryHeader from './components/Header'
import GallaryBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'GallaryPage',
  components: {
    GallaryHeader,
    GallaryBanner
  },
  data () {
    return {
      headerImg: '',
      titleImg: '',
      gallaryItems: ''
    }
  },
  methods: {
    getDetailInfo () {
      let index = this.$route.params.id
      axios.get('/api/gallary' + index + '.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.headerImg = data.headerImg
        this.titleImg = data.titleImg
        this.gallaryItems = data.gallaryItems
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .content
    position absolute
    top 1.8rem
    display block
    background $bgColor
</style>
