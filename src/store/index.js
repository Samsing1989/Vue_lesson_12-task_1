import { createStore } from 'vuex'
import candidates from './modules/candidates.js'
import workers from './modules/workers.js'
import interviews from './modules/interviews.js'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { candidates, workers, interviews },
})
