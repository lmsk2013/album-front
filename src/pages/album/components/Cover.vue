<template>
  <img class="coverImg" :src="coverImgUrl"/>
</template>

<script>
export default {
  name: 'Cover',
  data () {
    return {
      coverImgUrl: 'http://118.190.155.59/img/cover.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .coverImg
    position fixed
    height 100%
    width 100%
</style>
