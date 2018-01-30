<template>
  <div>
    <div class="content-wrapper">

      <select v-model="selected">
        <option v-for="animal in getAnimals" :value="animal.value">
          {{ animal.text }}
        </option>
      </select>

      <button type="button" ref="btn" @click="gotoPage">测试</button>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import { animals } from 'common/js/config'
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        selected: animals[0].value
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
