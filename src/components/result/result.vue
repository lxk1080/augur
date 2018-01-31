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
          <span class="nickname">朱丽叶的传说</span>
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
          <p class="text-top">来这里测试</p>
          <p class="text-bottom">你的运势</p>
          <div class="triangle"><!--三角箭头--></div>
        </div>
        <div class="img-wrapper">
          <img src="./code.png" width="80" height="80" alt="codePng">
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
        'animal'
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
          font-size 12px
      .score-box
        margin-top 12%
        .score-wrapper
          margin-bottom 20px
          text-align center
          font-size 0
          .title
            display inline-block
            vertical-align top
            line-height 18px
            letter-spacing 1px
            font-size 16px
            color #fff
          .star
            display inline-block
            vertical-align top
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
        padding 8px 16px
        border-radius 5px
        .text-top
          color #ff4565
          margin-bottom 2px
          font-size 18px
        .text-bottom
          color #ff4486
          font-size 22px
          font-weight 700
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
</style>
