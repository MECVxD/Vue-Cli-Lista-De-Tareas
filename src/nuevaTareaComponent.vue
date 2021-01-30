<template>
    <div class="input-group">
    <input type="text" 
            placeholder="Escribe una nueva tarea" 
            v-model="nuevaTarea" 
            class="form-control"
            v-on:keyup.enter="agregarTarea">
    <span class="input-group-btn">
        <button type="button" 
                v-on:click="agregarTarea" 
                class="btn btn-primary">Agregar Nueva Tarea</button>    
    </span>
    </div>
</template>
<script>
import {bus} from './main.js'

export default {
    data(){
        return {
            nuevaTarea: ''
        }
    },
    props:['tareas', 'actualizarContador'],
    methods: {
        agregarTarea(){
            var texto =this.nuevaTarea.trim()//borra espacios al principio y al final
            if(texto){
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
                bus.actualizarContador(this.tareas.length)
            }   
            this.nuevaTarea=''//Deja en blanco el espacio
            this.$http.post('tareas.json',{
                texto:texto,
                terminada: false
            }).then(respuesta=>console.log(respuesta))
        }
    },
    created(){
        bus.actualizarContador(this.tareas.length)
    }
}
</script>