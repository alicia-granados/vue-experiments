<template>
    <v-content> 
        <v-toolbar app class="primary">

            <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class="success">
                Ingreso 
            </v-btn>

            <v-btn class="error">
                Salir 
            </v-btn>

        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" temporary dark>
            <v-layout mt-4 column align-center>
                <v-flex>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-flex>
                <v-flex>
                    <p class="white--text mt-3 headlined">John Leider</p>
                </v-flex>
            </v-layout>
    
        </v-navigation-drawer>

    </v-content>
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