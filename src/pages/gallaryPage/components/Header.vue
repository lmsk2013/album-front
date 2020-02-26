<template>
  <div class="header">
    <img class="bg-img" :src="headerImg"/>
    <img class="text-img" :src="titleImg"/>
    <router-link
      tag="div"
      to="/"
      class="back-img">
      <img class="back-img-content" :src="backImg"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GallaryHeader',
  props: {
    headerImg: String,
    titleImg: String
  },
  data () {
    return {
      backImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAFQElEQVRoQ+2bWaxdUxjHf39EXyhJSyIa4VmEIBoJqqakhkQltJRIhIghUfMDKlEepBUeqn3gVWgrKpRGYlYpjcQ8PJmLGJpSERp88m9Wb/Y9wz1777P23ee2vqeb3LXWXr+11vnWNy2xB4v2YHYah4+IA4ATgeOBI4EjgEOBA4H90uL/DmwDvgM+Bz4G3gE2Sfq1qQ1qBD4iZgELgAuA2cDeNQH+Ad4GngLWSvq65jg9u2WFj4hTgFuBeUMA9+PzQmwAlkt6LcciZIGPiFOBe4CTc0yqxBhvAEskvVqibd8mQ8FHxCHAMmDRMJMYou9jPmmSvq8zRm34iLgQeASwQmtTrBCvkrS26iQqw0fEvsADwPVVP9Zw+xXALZL+KvudSvARsT+wDji97Acmud3rwHxJW8t8tzR8RByUtO1xZQZusc37wJmSfho0h1LwyVB5GTh20IAj8v93gbmDDKSB8Ok37vv1tBEBKzsNb9Y8STv6dSgD/zBwbdkvjli7lZKuqwWfrrM1IwZUdToLJPVk6LvzEWHn46PkgFT94Ci1t8N0lKRvOyc1EbydifmjRDHEXNZJspM1TnrCR8RcwApjd5IzJL1UBOoHb8fhpN2JHNgoaZzj1QWf3NIsLuMEixfAg7bJAVuNkyVzJNkK3Cm94J8Fzm1wNra8Lpe0ISKsjCbTMVov6bye8BFxMLAF2Kch+BeByyT94PFbgP/bITRJP3btfEQsTscxN7s/ugS4X9K/uwZvAd6fvlHSQ73gm1B0XwCXSHqrc0Vbgh9TfGO/+eS8/JI59rYauLqfg9ESvGOBMzynIryDjs9nOu9/ADdIenSi8VqC95TOtsItwt8B3JsB/gNgoaRPB40VEY7dD3SuBo1T+P8TwFkl2jv4ubQI746OtdcV390rUyjpz7qDDNMvItYD55QYY7WkhUV4JwdOKNGxVxPriislPV2zf5ZuFeA3S5pdhP8GcKalqthiulSS+7cqFeC3SJpVhN9eyJ2VgbDWXGo9Icl/ty4V4LdLml6E92+2rHiXvdtjdnLZjk22qwCPLLsmExFl4W2PH507aZhjUSrA75A0re6x/wy4WNJ7OSada4wK8FslzRhG4fk6uw1YIansqcnF2XOcCvBfSTo8x1X3DHCFJF93rUoF+K6rbhgjx27wolx587orWAG+y8i5M11ddb/t6+4+jyHJLuykSwX4LvM2l2OzMZ2CrCUkZVayAnyXY+NwUi6X1llSm7vO6PaVlrw6n9CZkraN86giIncwYxVwk6Sejk5L8N3BDG9PQ2EsZ32cMvqk8wi0BN83jNVUANPBjcWSXMYyJi3A9w9gpt0v6xOX0UGdbZ5M9TM2kduI3j4naSws30bS4ssU0NzUws5PnLRIO5Jb8XWeAB+/u4Hbgel1jlCNPoPTVQneBUdOMOxO4jqdcUz/p6h7bW8qHv5wjyxOSMf/IsCJh6ks1ctSdtFGhMPR10xR+lWS+hZTDUwYpFK0FwBXVk8lcXzRSq5+KVo6/jOAV1zYM0XoratchDhhgGXgzheOv01fn4BjRnwBDO76m505+ImkNHw6ATZInJVxwdIoio2z87MXHhdOwLRUct63srGlVbFitvvcTMl5EWqEHhv8lgInzT826FgAPzNZbkelpd1+HLh50p+ZdCyCr0Hn7Sardu9N4C5JvoFqSyWFN+grETGn8LRsr0HtK/7fhUwufV+WK0SeFb6gFA8DbBq73tU5/2EeFW5OjwrX5M4PNgLf8ZMoPie1keTnpDP7PCf9GXD1lu/qqfmctOJxbq35f6hA9k8KpnDMAAAAAElFTkSuQmCC'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display block
    position absolute
    overflow hidden
    width 100%
    height 2rem
    background $bgColor
    .bg-img
      width 80%
      height 2rem
      opacity .05
    .text-img
      position absolute
      top 1.2rem
      left .1rem
      height .34rem
      width 1.3rem
    .back-img
      position absolute
      top .95rem
      right .1rem
      .back-img-content
        height .76rem
        opacity .3
</style>
