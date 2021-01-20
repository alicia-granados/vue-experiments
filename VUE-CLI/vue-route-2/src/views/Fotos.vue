<template>
    <div >
        <h1>Galería de Fotos :</h1>

        <router-link  :to="{name: 'fotos', params: { id: item } }"
             v-for= "(item,index) of fotosArreglo" v-bind:key="index" >
            <button class="btn btn-outline-danger">  Foto {{item}} </button>
        </router-link>
        
        <Foto />

        <button class ="btn btn-warning" @click = "home">Home</button>
        <button class ="btn btn-warning" @click = "anterior">Anterior</button>
        <button class ="btn btn-warning" @click = "siguiente">Siguiente</button>

    </div>
</template>
    
<script>

    import Foto  from '@/components/Fotografia.vue'
    export default {
        name: 'Fotos',
        components:{
            Foto
        },
        data(){
            return {
                fotosArreglo:[1,2,3,4,5]
            }
        }, methods: {
            home(){
                this.$router.push('/')
            },
            anterior(){
                this.$router.go(-1)
            },
            siguiente(){
                this.$router.go(+1)
            }
        },
    }

</script>