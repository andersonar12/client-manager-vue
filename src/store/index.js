import { createStore } from 'vuex'
import { state } from './options/state.js'
import { actions } from './options/actions.js'
import { getters } from './options/getters.js'
import { mutations } from './options/mutations.js'

export default createStore({
  state,
  mutations,
  actions,
  getters
})
