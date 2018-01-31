<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const CLS_ON = 'on'
  const CLS_OFF = 'off'

  export default {
    props: {
        size: {
          type: Number
        },
        length: {
          type: Number
        },
        score: {
          type: Number
        }
    },
    computed: {
        starType() {
          return 'star-' + this.size
        },
        itemClasses() {
            let result = []
            let score = Math.floor(this.score * 2) / 2
            let integer = Math.floor(score)
            for (let i = 0; i < integer; i++) {
                result.push(CLS_ON)
            }
            while (result.length < this.length) {
                result.push(CLS_OFF)
            }
            return result
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin";

  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 10px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('star48_on')
        &.off
          bg-image('star48_off')
</style>
