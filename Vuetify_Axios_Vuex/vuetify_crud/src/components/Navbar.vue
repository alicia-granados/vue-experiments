<template>
    <v-main xl > 
        <v-app-bar  app class="primary">

            <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class=" mr-2  success" >
                Ingreso 
            </v-btn>

            <v-btn class="mr-2 dark--text error"  >
                Salir 
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer  app v-model="drawer" temporary >
            <v-layout mt-4 column align-center>
                <v-flex>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-flex>
                <v-flex>
                    <p class="dark--text mt-3 headlined">John Leider</p>
                </v-flex>
            </v-layout>
            <v-layout column>
                <v-flex ma-2>
                    <v-btn
                        block
                        color="success"
                        class="mb-3"
                        :to="{name:'Home'}"
                    >
                        Home
                    </v-btn>
                    <v-btn
                        block
                        color="success"
                        class="mb-3"
                        :to="{name:'Tarea_crud'}"
                    >
                        Lista de Tareas
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>

    </v-main>
</template>

<script>
    export default{
        name: 'Navbar',
        data(){
            return{
                drawer:true
            }
        }
    }
</script>