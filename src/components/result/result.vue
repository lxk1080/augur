<template>
  <transition name="slide">
    <div class="result">
      <!--结果展示-->
      <div class="content-wrapper">
        <div class="header">
          <h1 class="text">2018年狗年运势</h1>
        </div>
        <div class="img-wrapper">
          <img class="headpic" src="./head.png" width="60" height="60" alt="headPng">
          <span class="nickname">{{username}}</span>
        </div>
        <!--分数展示-->
        <div class="score-box">
          <div class="score-wrapper">
            <span class="title">感情旺 : </span>
            <v-star class="star" :size="48" :length="5" :score="animal.emotion"></v-star>
            <!--<span class="score">{{animal.emotion}}</span>-->
          </div>
          <div class="score-wrapper">
            <span class="title">事业旺 : </span>
            <v-star class="star" :size="48" :length="5" :score="animal.career"></v-star>
            <!--<span class="score">{{animal.career}}</span>-->
          </div>
          <div class="score-wrapper">
            <span class="title">财富旺 : </span>
            <v-star class="star" :size="48" :length="5" :score="animal.treasure"></v-star>
            <!--<span class="score">{{animal.treasure}}</span>-->
          </div>
        </div>
      </div>
      <!--二维码-->
      <div class="code-wrapper">
        <div class="text-wrapper">
          <p class="text-top">测运势就在公众号</p>
          <p class="text-bottom">鲜辣财经</p>
          <div class="triangle"><!--三角箭头--></div>
        </div>
        <div class="img-wrapper">
          <img class="img" src="./code.png" alt="codePng">
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import Star from 'base/star/star'

  export default {
    computed: {
      ...mapGetters([
        'animal',
        'username'
      ])
    },
    components: {
      'v-star': Star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .result
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background #ffd1b0
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .content-wrapper
      margin 30px auto 30px
      width 85%
      height 70%
      background url("bg.jpg") no-repeat
      background-size 100% 100%
      overflow hidden
      .header
        margin-top 12%
        @media (-webkit-max-device-pixel-ratio: 2),(max-device-pixel-ratio: 2)
          margin-top 8%
        margin-bottom 8%
        text-align center
        .text
          font-size 20px
          color #fff
      .img-wrapper
        text-align center
        .headpic
          border #fff solid 1px
          border-radius 50%
        .nickname
          display block
          margin 4% auto 0
          font-size 14px
          color #000
      .score-box
        margin-top 10%
        @media (-webkit-max-device-pixel-ratio: 1.8),(max-device-pixel-ratio: 1.8)
          margin-top 5%
        .score-wrapper
          margin-bottom 20px
          text-align center
          font-size 0
          .title
            display inline-block
            vertical-align middle
            line-height 18px
            letter-spacing 1px
            font-size 20px
            color #fff
          .star
            display inline-block
            vertical-align middle
            margin 0 12px
          .score
            display inline-block
            vertical-align top
            line-height 18px
            font-size 12px
            color rgb(255, 153, 0)
    .code-wrapper
      width 80%
      margin 0 auto
      .text-wrapper
        position relative
        display inline-block
        vertical-align top
        background #fff
        padding 5px 8px
        border-radius 5px
        .text-top
          color #ff4565
          margin-bottom 2px
          font-size 16px
        .text-bottom
          color #ff4486
          font-size 20px
          font-weight 700
          text-align center
        .triangle
          position absolute
          top 50%
          left 100%
          transform translate3d(0, -50%, 0)
          border-width 8px 12px
          border-style solid
          border-color transparent transparent transparent #fff
      .img-wrapper
        display inline-block
        vertical-align top
        margin-left 30px
        .img
          width 90px
          height 90px
          @media (-webkit-max-device-pixel-ratio: 1.9),(max-device-pixel-ratio: 1.9)
            width 60px
            height 60px
</style>
