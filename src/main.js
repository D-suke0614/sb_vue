import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from '@/router'

const app = createApp(App);
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state, param) {
      state.count += param.amount;
    }
  },
  getters: {
    squared(state) {
      return state.count * state.count
    },
    cube(state) {
      return state.count * store.getters.squared
    }
  }
})

app.use(router);
app.use(store);
app.mount('#app');
