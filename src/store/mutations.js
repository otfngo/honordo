import * as types from './mutation-types'

const mutations = {
  [types.SET_LANG](state, lang){
    state.lang = lang
  }
}

export default mutations
