const app= new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        cambiarTexto: 'Texto',
        frutas: ['Manzana','Pera','Platano'],
        frutasObj:[
            {nombre:'Pera',cantidad:10},
            {nombre:'Guayaba',cantidad:0},
            {nombre:'Durazno',cantidad:6},
        ],
        nuevaFruta:''

    },
    methods:{
        agregarFruta (){
            this.frutasObj.push({
                nombre: this.nuevaFruta,cantidad:0
            })
        }
    }
    
})

app.cambiarTexto ='Otro texto con Vue';
