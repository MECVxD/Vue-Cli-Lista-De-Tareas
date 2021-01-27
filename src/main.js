import Vue from 'vue'
import App from './App.vue'

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
