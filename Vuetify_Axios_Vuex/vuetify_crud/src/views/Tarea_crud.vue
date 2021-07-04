<template>
  <v-container  grid-list-xl >
    <v-layout>
      <v-flex md6 class="mr-8">
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
            <v-btn color="warning"  class="ml-0 mr-2" @click="editar(index)">Editar</v-btn>
            <v-btn color= "error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md6  v-if ="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de tarea"  v-model="titulo"></v-text-field>
            <v-textarea label="Descripción de tarea"  v-model="descripcion"></v-textarea>
            <v-btn block color="success" type="submit">Agregar</v-btn>
          </v-form>
        </v-card>
      </v-flex>

        <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo de tarea"  v-model="titulo"></v-text-field>
            <v-textarea label="Descripción de tarea"  v-model="descripcion"></v-textarea>
            <v-btn block color="warning" type="submit">Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>
    <!-- Snackbar-->
    <v-snackbar
      v-model="snackbar"
    >
      {{mensaje}}
      <v-btn
        color="primary"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <!-- Fin Snackbar-->
  </v-container>
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
        descripcion:'',
        snackbar: false,
        mensaje: '',
        formAgregar : true,
        indexTarea : ''
      }
    },
    methods:{
      agregarTarea(){
        if ( this.titulo === '' || this.descripcion === '' ){
          this.snackbar = true;
          this.mensaje = 'Ingresa todos los campos';
        } else {
          this.listaTareas.push({
            id: Date.now(),
            titulo: this.titulo,
            descripcion: this.descripcion
          })
          this.titulo = '';
          this.descripcion = '';
          this.snackbar = true;
          this.mensaje = 'Tarea agregada';
        }
      },
      eliminarTarea(id){
        this.listaTareas = this.listaTareas.filter( e => e.id != id);
      },
      editar(index){
        this.formAgregar = false;
        this.titulo = this.listaTareas[index].titulo;
        this.descripcion = this.listaTareas[index].descripcion;
        this.indexTarea = index;
      },
      editarTarea(){
        this.listaTareas[this.indexTarea].titulo = this.titulo;
        this.listaTareas[this.indexTarea].descripcion = this.descripcion;
        this.formAgregar = true;
      }
    }
  }
</script>
