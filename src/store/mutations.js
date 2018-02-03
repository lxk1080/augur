/**
 * Created by lxk on 2017/12/12.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_ANIMAL](state, animal) {
    state.animal = animal
  },
  [types.SET_USERNAME](state, username) {
    state.username = username
  }
}

export default mutations
