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
export default {
    data(){
        return {
            nuevaTarea: ''
        }
    },
    props:['tareas'],
    methods: {
        agregarTarea(){
            var texto =this.nuevaTarea.trim()//borra espacios al principio y al final
            if(texto){
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
                this.$emit('incrementarContador', 1)
            }   
            this.nuevaTarea=''//Deja en blanco el espacio
        }
    }
}
</script>