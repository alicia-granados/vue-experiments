<template>
  <div>
    <br/><br/>
    <h1  class="text-center">Indicadores económicos diarios API REST</h1>
    <br/>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker 
            v-model= "Obtener_fecha" 
            color= "pink lighten-4"
            full-width
            class= "mt-4"
            locale = "es-cl"
            :min = "minimo"
            :max = "maximo"
            @change="getDolar(Obtener_fecha)"
          >
          </v-date-picker>
        </v-card>
        <v-card color ="error" dark>
          <v-card-text class="display-1 text-center">
           {{valor}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import axios  from "axios";
  import {mapMutations} from "vuex";

  export default {
    data(){
      return {
        Obtener_fecha: new Date().toISOString().substr(0,10),
        minimo: '1984',
        maximo: new Date().toISOString().substr(0,10),
        valor : null
      }
    },
    methods:{
      ...mapMutations(['mostrarLoading','ocultarLoading']),
      async getDolar(dia){
        try{
          this.mostrarLoading({titulo : 'Accediendo a información', color :'secondary'})
          //console.log(dia.split(/[-/]/).reverse().join("-")); Invierte la fecha
          let fecha_ap = dia.split(/[-/]/).reverse().join("-")
          let datos =  await axios.get(`https://mindicador.cl/api/dolar/${fecha_ap}`)
          //console.log(datos.data.serie[0].valor) ;
          if( datos.data.serie.length > 0){
            this.valor = await datos.data.serie[0].valor
          }else {
            this.valor = "Sin resultados"
          }
        }catch (error) {
          console.log(error);
        }
        finally{
          this.ocultarLoading();
        }
      }
    }, 
    created(){
      //this.getDolar('01-02-2019');
    }
  }
</script>
