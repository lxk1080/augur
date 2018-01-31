<template>
  <div class="entry">
    <div class="content-wrapper">
      <!--姓名-->
      <div class="control name-wrapper border-1px">
        <input class="username" type="text" v-model="username" placeholder="您的姓名">
      </div>
      <!--生肖-->
      <div class="control animal-wrapper border-1px">
        <select class="select" v-model="selected">
          <option disabled>请选择您的生肖</option>
          <option v-for="animal in getAnimals" :value="animal.value">
            {{ animal.text }}
          </option>
        </select>
        <div class="tip" v-show="!selected">您的生肖</div>
      </div>
      <!--按钮-->
      <div class="btn-wrapper">
        <button class="btn" type="button" ref="btn" @click="gotoPage">测试运势</button>
      </div>
      <!--弹出层-->
      <div class="tip-wrapper">
        <top-tip ref="topTip">
          <div class="tip-text">
            <span>请先完成所有信息</span>
          </div>
        </top-tip>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import { animals } from 'common/js/config'
  import { mapMutations } from 'vuex'
  import TopTip from 'base/top-tip/top-tip'

  export default {
    data() {
      return {
        username: '',
        selected: ''
      }
    },
    computed: {
      getAnimals() {
        return animals
      }
    },
    methods: {
      ...mapMutations({
        setAnimal: 'SET_ANIMAL'
      }),
      gotoPage() {
        if (!this.username || !this.selected) {
          this.$refs.topTip.show()
          return
        }
        this.setAnimal(this.getAnimalObj(this.selected))
        this.$router.push({
          path: '/result'
        })
      },
      getAnimalObj(value) {
        let index = animals.findIndex((item) => {
          return item.value === value
        })
        return animals[index]
      }
    },
    components: {
      'top-tip': TopTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/mixin'

  ::-moz-placeholder
    color #595757
  ::-webkit-input-placeholder
    color #595757
  :-ms-input-placeholder
    color #595757

  .entry
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background url("bg.jpg")
    background-size 100% 100%
    .content-wrapper
      .control
        width 90%
        height 40px
        line-height 40px
        border-1px(#8d8d8d)
        padding 5px 0
        &.name-wrapper
          margin 40% auto 10%
          .username
            width 100%
            height 100%
        &.animal-wrapper
          margin 0 auto 15%
          position relative
          .select
            padding-left 0
            width 100%
            height 100%
            font-size 16px
            border none
            appearance none
            background url("triangle.png") no-repeat 98% center
            background-size 16px 8px
          .tip
            position absolute
            top 5px
            z-index -1
            color #595757
      .btn-wrapper
        width 100%
        text-align center
        .btn
          width 88%
          height 50px
          line-height 45px
          border #ff4172 solid 1px
          border-radius 50px
          background: #fff
          font-size 25px
          color: #ff4172
      .tip-wrapper
        .tip-text
          height 30px
          line-height 30px
          background #ff4e00
          color #fff
          text-align center
</style>
