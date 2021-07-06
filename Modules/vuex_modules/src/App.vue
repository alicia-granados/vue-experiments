<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-spacer></v-spacer>

     
    </v-app-bar>

    <v-main>
      <router-link :to="{query:{seccion:1}}" >
        <v-btn color="error">
          1
        </v-btn> 
      </router-link>
      <router-link :to="{query:{seccion:2}}" >
        <v-btn color="warning">
          2
        </v-btn> 
      </router-link>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  watch:{
    //pendiente de un dato llamado seeccion
    "$route.query.seccion":{
      immediate :true, //pendiemte del dato cada vez que se llame,
      handler(seccion){
        //pendiente de los nuevos valores
        console.log(`seccion a cambiado a : ${seccion}`)
      }
    }
    //se pone $route.query.nombre
  }
};
</script>
