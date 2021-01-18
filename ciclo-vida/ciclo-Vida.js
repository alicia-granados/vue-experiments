const app= new Vue({
    el: '#app',
    data: {
        saludo: 'Soy ciclo de vida de Vue'
    },
    beforeCreate(){
        console.log('berfore creatre')
    },
    created(){
        /*al crear los métodos, observadores y eventos, pero aún no se accede al DOM.
        Aún no se puede acceder a 'el'**/
        console.log('created');
    },
    beforeMount(){
        /*se ejecuta antes de insertar el dom*/
        console.log('before Moount')
    },
    mounted(){
        //se ejecuta al insertar el dom
        console.log('mounted')
    },

    beforeUpdate(){
        // al detectatar un cambio
        console.log('update')
    },
    updated(){
        // al realizar un cambio
        console.log('updated')
    },
    beforeDestroy(){
        //antes de destruir una instancia
        console.log('beforeDestroy')
    },
    destroyed(){
        // se destruye toda la instancia
        console.log('destroyed')
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }

})