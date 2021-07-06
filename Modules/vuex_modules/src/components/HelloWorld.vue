<template>
  <v-container>
    <h1 class="text-center"> Sin modulos</h1>
    <h2 v-for="(item, index) in tareas_1 " :key="index"> {{item}} </h2>
    <h3> {{titulo}} </h3>

    <h1 class="text-center"> Con modulos</h1>
    <h2 v-for="(item2, index) in tareasState " :key="index"> {{item2}} </h2>


    <h3>{{contador_2}}</h3>
    <v-btn @click="aumentarContador(1)"> + </v-btn>

  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
  export default {
    name: 'HelloWorld',
    computed:{
      //importa desde el store.js
      ...mapState(['tareas_1', 'titulo']),
      ...mapState('tareas', ['tareasState']),
      ...mapState('contador',['contador_2'])
      // en elmsegundo map solo estaran los que importa de modulos
      //tareas nombre: modulos y ['tareasstate] nombre de la variable
      
    },
    methods:{
      ...mapMutations('contador',['aumentarContador'])
    }
    
  }
</script>
