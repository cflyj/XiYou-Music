import { createStore , createLogger} from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const debug = process.env.NODE_ENV !=='production'

export default createStore({
  state,
  mutations,
  getters,
  actions,
  strict:debug,      //严格模式
  plugins:debug?[createLogger()]:[]
})
