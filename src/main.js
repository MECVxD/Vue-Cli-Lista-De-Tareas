import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root='https://tareas-ef1b3-default-rtdb.firebaseio.com/'

export var bus=new Vue({
  methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
