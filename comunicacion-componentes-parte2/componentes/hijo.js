Vue.component('hijo',{
    template:
    `
        <div class="py-5 bg-success">
            <h4>Componente hijo: {{numero}}</h4>
            <h4>Nombre: {{nombre}}</h4>
            <button @click="numero++" class= "btn btn-dark text-white"> + </button>
        </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Ignacio'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }  

})