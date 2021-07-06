export default{
    namespaced: true,
    state:{
        contador_2 : 2
    },
    mutations:{
        aumentarContador (state,payload){
            state.contador_2 = state.contador_2 + payload
        }
    },
    actions:{

    }, 
    getters:{

    }
}