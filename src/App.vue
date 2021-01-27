<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo v-bind:titulo="titulo"></titulo>
      {{numTareas}}
      <nueva-tarea v-bind:tareas="tareas" v-on:incrementarContador="numTareas += $event"></nueva-tarea>
      <lista-tareas v-bind:tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
import NuevaTarea from './nuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'

export default {
    components: {
      Titulo,
      NuevaTarea,
      ListaTareas
    },
    data(){
      return {
        titulo: 'Lista de Tareas',
        numTareas: 3,
        tareas: [
          {
                texto: 'Aprender Vue.js',
                terminada: false
            },
            {
                texto: 'Aprender Angular 2',
                terminada: false
            },
            {
                texto: 'Aprender ionic',
                terminada: false
            }
        ]
      }
    }
}
</script>

<style>

</style>
