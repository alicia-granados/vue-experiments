import Vue from 'vue'
import Vuex from 'vuex'
import tareas from '../modules/tareas'
import contador from '../modules/contador'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas_1 : ['tarea 1','tarea 2', 'tarea 3'],
    titulo : 'desde store.js'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tareas, contador
  }
})
