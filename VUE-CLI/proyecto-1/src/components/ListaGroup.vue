<template>
    <div>
        <ul class="list-group">
            <li v-for="(item,index) of arrayOrdenado"  v-bind:key="item.id"  @click ="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center" >
               {{index}} -  {{item.nombre}} -Cantidad:{{item.cantidad}} 
            </li>
            <button class= "btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default{
        name:'listGroup',
        computed :{
            ...mapState(['frutas']),
            arrayOrdenado(){
                return this.frutas.sort( (a,b) =>  b.cantidad - a.cantidad ) 
            }
        },
        methods: {
            ...mapMutations(['aumentar','reiniciar'])
        },
    }

</script>