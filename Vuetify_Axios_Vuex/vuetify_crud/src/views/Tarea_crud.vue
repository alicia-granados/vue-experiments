<template>
  <v-main  grid-list-xl>
    <v-layout>
      <v-flex md6>
        <v-card  class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
             <v-chip
              ml-0
              color="pink"
              label
              text-color="white"
              >
                {{item.titulo}} 
              </v-chip>
            <p>
              {{item.descripcion}}
            </p>
            <v-btn color="warning"  class="ml-0 mr-2">Editar</v-btn>
            <v-btn color= "error">Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md6 >
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de tarea" required v-model="titulo"></v-text-field>
            <v-textarea label="Descripción de tarea" required v-model="descripcion"></v-textarea>
            <v-btn block color="success" type="submit">Agregar</v-btn>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>
  </v-main>
</template>

<script>
  

  export default {
    name: 'Tarea_crud',
    data(){
      return{
        listaTareas:[
          {
            id: 1,
            titulo: 'Título de la tarea # 1',
            descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          },
          {
            id: 2,
            titulo: 'Título de la tarea # 2',
            descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          },
        ],
        titulo:'',
        descripcion:''
      }
    },
    methods:{
      agregarTarea(){
        console.log(this.titulo,this.descripcion);
      }
    }
  }
</script>
