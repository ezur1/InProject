
import Vue from "vue";
import Vuex from "vuex";
import taskService from '../services/taskService.js'


Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    tasks : []
  },
  mutations: {
    setTasks(state,{tasks}){
      state.tasks = tasks
    }
  },
  actions: {
    async loadTasks(context){
      const tasks = await taskService.query()
      context.commit({type: 'setTasks', tasks})
      return tasks
    }
  },
  getters:{
    tasks(state){
      return state.tasks
    }
  },
  modules: {}
});

