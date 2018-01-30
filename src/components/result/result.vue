<template>
  <transition name="slide">
    <div class="result">
      <div>
        ...
      </div>
      <div class="score-box">
        <div class="score-wrapper">
          <span class="title">感情</span>
          <v-star class="star" :size="48" :length="5" :score="animal.emotion"></v-star>
          <span class="score">{{animal.emotion}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">事业</span>
          <v-star class="star" :size="48" :length="5" :score="animal.career"></v-star>
          <span class="score">{{animal.career}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">财富</span>
          <v-star class="star" :size="48" :length="5" :score="animal.treasure"></v-star>
          <span class="score">{{animal.treasure}}</span>
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
    background #e8e8e8
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .score-box
      .score-wrapper
        margin-bottom 8px
        font-size 0
        .title
          display inline-block
          vertical-align top
          line-height 18px
          font-size 12px
          color rgb(7, 17, 27)
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
</style>
